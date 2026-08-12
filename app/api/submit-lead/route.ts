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
          "Lead storage not configured. Set Google Sheets env vars and/or Lead_notification_url in Netlify.",
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

  // Run Sheets + webhook in parallel so a slow/broken Sheets call cannot block the lead webhook
  const tasks: Promise<"sheets" | "webhook">[] = [];

  if (sheetsConfigured) {
    tasks.push(
      withTimeout(appendRow(row), 8_000, "Google Sheets")
        .then(() => "sheets" as const)
        .catch((error: unknown) => {
          const err = error as { message?: string; code?: number; response?: { status?: number } };
          console.error("Google Sheets error:", {
            message: err?.message,
            code: err?.code,
            status: err?.response?.status,
            spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
            timestamp: new Date().toISOString(),
          });
          throw error;
        })
    );
  }

  if (webhookUrl) {
    const outbound = buildLeadWebhookPayload({ fullName, email, phone });
    tasks.push(
      withTimeout(
        fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(outbound),
        }).then(async (res) => {
          if (!res.ok) {
            throw new Error(`Lead webhook HTTP ${res.status}`);
          }
          return "webhook" as const;
        }),
        10_000,
        "Lead webhook"
      ).catch((error: unknown) => {
        console.error("Lead webhook request failed:", {
          message: error instanceof Error ? error.message : "Unknown error",
          timestamp: new Date().toISOString(),
        });
        throw error;
      })
    );
  }

  const results = await Promise.allSettled(tasks);
  const succeeded = results.some((r) => r.status === "fulfilled");

  if (!succeeded) {
    const messages = results
      .filter((r): r is PromiseRejectedResult => r.status === "rejected")
      .map((r) => (r.reason instanceof Error ? r.reason.message : "Unknown error"));
    return NextResponse.json(
      {
        error: "Failed to save submission",
        detail: messages[0] ?? "Both Google Sheets and lead webhook failed",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
