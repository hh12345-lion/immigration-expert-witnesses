import { NextResponse } from "next/server";
import { appendRow, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import {
  getLeadWebhookUrl,
  buildLeadWebhookPayload,
  LEAD_BRAND_NAME,
  type SubmitLeadPayload,
} from "@/lib/submit-lead";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim();
}

async function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    return await Promise.race([
      promise,
      new Promise<T>((_, reject) => {
        timer = setTimeout(() => reject(new Error(`${label} timed out after ${ms}ms`)), ms);
      }),
    ]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function POST(request: Request) {
  const webhookUrl = getLeadWebhookUrl();
  const sheetsConfigured = isGoogleSheetsConfigured();

  if (!sheetsConfigured && !webhookUrl) {
    return NextResponse.json(
      {
        error:
          "Lead storage not configured. Set Google Sheets env vars and/or Lead_notification_url in Netlify (runtime), then redeploy.",
      },
      { status: 503 }
    );
  }

  let body: SubmitLeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const fullName = sanitize(body.fullName ?? "");
  const email = (body.email ?? "").toLowerCase().trim();
  const phone = sanitize(typeof body.phone === "string" ? body.phone : "");

  if (!fullName || !email) {
    return NextResponse.json({ error: "fullName and email are required" }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const row = [
    new Date().toISOString(),
    fullName,
    sanitize(body.organisation ?? ""),
    email,
    phone,
    sanitize(body.witnessType ?? ""),
    sanitize(body.country ?? ""),
    sanitize(body.caseType ?? ""),
    sanitize(body.funding ?? ""),
    sanitize(body.summary ?? ""),
    LEAD_BRAND_NAME,
  ];

  let sheetsOk = false;
  let webhookOk = false;
  const errors: string[] = [];

  // Webhook first — primary lead notification path
  if (webhookUrl) {
    try {
      const outbound = buildLeadWebhookPayload({ fullName, email, phone });
      const res = await withTimeout(
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(outbound),
        }),
        12_000,
        "Lead webhook"
      );
      if (!res.ok) {
        const bodyText = await res.text().catch(() => "");
        throw new Error(
          `Lead webhook HTTP ${res.status}${bodyText ? `: ${bodyText.slice(0, 160)}` : ""}`
        );
      }
      webhookOk = true;
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Lead webhook failed";
      errors.push(message);
      console.error("Lead webhook request failed:", {
        message,
        timestamp: new Date().toISOString(),
      });
    }
  }

  if (sheetsConfigured) {
    try {
      const result = await withTimeout(appendRow(row), 12_000, "Google Sheets");
      if (!result.success || result.updatedCells < 1) {
        throw new Error("Google Sheets append did not write any cells");
      }
      sheetsOk = true;
      console.info("Google Sheets write ok:", {
        updatedRange: result.updatedRange,
        updatedCells: result.updatedCells,
      });
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number; response?: { status?: number } };
      const message = err?.message || "Google Sheets write failed";
      errors.push(message);
      console.error("Google Sheets error:", {
        message,
        code: err?.code,
        status: err?.response?.status,
        spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
        tab: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
        timestamp: new Date().toISOString(),
      });
    }
  }

  // Fail closed: never show thank-you unless at least one channel actually delivered
  if (!sheetsOk && !webhookOk) {
    return NextResponse.json(
      {
        error: "Failed to save submission",
        detail: errors[0] ?? "Google Sheets and lead webhook both failed",
        delivered: { sheets: false, webhook: false },
      },
      { status: 502 }
    );
  }

  return NextResponse.json({
    ok: true,
    delivered: { sheets: sheetsOk, webhook: webhookOk },
  });
}
