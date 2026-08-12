import { NextResponse } from "next/server";
import {
  appendRow,
  getSheetsConfigStatus,
} from "@/lib/google-sheets";
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

function sheetsErrorMessage(error: unknown): string {
  const err = error as {
    message?: string;
    code?: number | string;
    errors?: Array<{ message?: string }>;
    response?: { status?: number; data?: { error?: { message?: string } } };
  };

  const apiMessage =
    err?.response?.data?.error?.message ||
    err?.errors?.[0]?.message ||
    err?.message ||
    "Google Sheets write failed";

  // Common Netlify / permissions hints
  if (/permission|forbidden|403/i.test(apiMessage)) {
    return `${apiMessage} — share the spreadsheet with the service account email as Editor.`;
  }
  if (/DECODER|PEM|private key|invalid_grant/i.test(apiMessage)) {
    return `${apiMessage} — fix GOOGLE_PRIVATE_KEY (use \\n escapes, or set GOOGLE_PRIVATE_KEY_B64).`;
  }
  if (/not found|404|Unable to parse range/i.test(apiMessage)) {
    return `${apiMessage} — check GOOGLE_SHEET_ID and GOOGLE_SHEET_TAB_NAME (exact tab name).`;
  }

  return apiMessage;
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
  const sheetsStatus = getSheetsConfigStatus();
  const sheetsConfigured = sheetsStatus.configured;

  // If Sheet ID is set but email/key missing, fail loudly (don't silently skip Sheets)
  if (sheetsStatus.sheetIdSet && !sheetsConfigured) {
    return NextResponse.json(
      {
        error: "Google Sheets is partially configured",
        detail: `Missing: ${sheetsStatus.missing.join(", ")}. Set these in Netlify → Environment variables (Runtime), then redeploy.`,
        delivered: { sheets: false, webhook: false },
      },
      { status: 503 }
    );
  }

  if (!sheetsConfigured && !webhookUrl) {
    return NextResponse.json(
      {
        error: "Lead storage not configured",
        detail:
          "Set GOOGLE_SERVICE_ACCOUNT_EMAIL, GOOGLE_PRIVATE_KEY, GOOGLE_SHEET_ID and/or Lead_notification_url in Netlify (Runtime), then redeploy.",
        delivered: { sheets: false, webhook: false },
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
  let sheetsError: string | null = null;
  let webhookError: string | null = null;

  if (sheetsConfigured) {
    try {
      const result = await withTimeout(appendRow(row), 15_000, "Google Sheets");
      if (!result.success || result.updatedCells < 1) {
        throw new Error("Google Sheets append did not write any cells");
      }
      sheetsOk = true;
      console.info("Google Sheets write ok:", {
        updatedRange: result.updatedRange,
        updatedCells: result.updatedCells,
      });
    } catch (error: unknown) {
      sheetsError = sheetsErrorMessage(error);
      console.error("Google Sheets error:", {
        message: sheetsError,
        spreadsheetId: process.env.GOOGLE_SHEET_ID?.slice(0, 8) + "...",
        tab: process.env.GOOGLE_SHEET_TAB_NAME || "Sheet1",
        timestamp: new Date().toISOString(),
      });
    }
  }

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
      webhookError = error instanceof Error ? error.message : "Lead webhook failed";
      console.error("Lead webhook request failed:", {
        message: webhookError,
        timestamp: new Date().toISOString(),
      });
    }
  }

  // If Sheets is configured, it MUST succeed — webhook success must not hide a Sheets failure
  if (sheetsConfigured && !sheetsOk) {
    return NextResponse.json(
      {
        error: "Failed to write to Google Sheet",
        detail: sheetsError ?? "Google Sheets write failed",
        delivered: { sheets: false, webhook: webhookOk },
      },
      { status: 502 }
    );
  }

  if (!sheetsOk && !webhookOk) {
    return NextResponse.json(
      {
        error: "Failed to save submission",
        detail: sheetsError || webhookError || "No delivery channel succeeded",
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
