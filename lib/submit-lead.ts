/** Brand label sent to Lead_notification_url webhook (n8n). */
export const LEAD_BRAND_NAME = "Immigration Expert Witnesses";

/**
 * Row 1 column headers for the Google Sheet — must match append order in
 * `/api/submit-lead`. Put these exact labels in row 1 of the target tab.
 */
export const LEAD_SHEET_COLUMNS = [
  "Timestamp",
  "Full Name",
  "Organisation",
  "Email",
  "Phone",
  "Witness Type",
  "Country",
  "Case Type",
  "Funding",
  "Case Summary",
  "Brand Name",
] as const;

export type SubmitLeadInput = {
  fullName: string;
  email: string;
  phone: string;
};

export type SubmitLeadPayload = SubmitLeadInput & {
  organisation?: string;
  witnessType?: string;
  country?: string;
  caseType?: string;
  funding?: string;
  summary?: string;
};

/**
 * Outbound JSON for Lead_notification_url / n8n — only these four keys.
 * @see Lead_notification_setup.md
 */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": (input.phone ?? "").trim(),
    "Brand name": LEAD_BRAND_NAME,
  };
}

export function getLeadWebhookUrl(): string | undefined {
  const url =
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    process.env.lead_notification_url?.trim() ||
    "";
  return url || undefined;
}

/**
 * Client: POST to /api/submit-lead.
 * Always sends fullName, email, phone (phone may be "").
 * Extra fields are for Google Sheets when the Next.js route handles the request.
 */
export async function postSubmitLead(
  payload: SubmitLeadPayload
): Promise<{ ok: true } | { ok: false; error: string }> {
  const fullName = payload.fullName.trim();
  const email = payload.email.trim();
  const phone = (payload.phone ?? "").trim();

  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName,
        email,
        phone,
        organisation: payload.organisation ?? "",
        witnessType: payload.witnessType ?? "",
        country: payload.country ?? "",
        caseType: payload.caseType ?? "",
        funding: payload.funding ?? "",
        summary: payload.summary ?? "",
      }),
    });

    if (res.ok) return { ok: true };

    let message = "Something went wrong. Please try again or email us directly.";
    try {
      const data = (await res.json()) as { error?: string; detail?: string };
      if (data.detail) message = data.detail;
      else if (data.error) message = data.error;
    } catch {
      /* ignore parse errors */
    }
    return { ok: false, error: message };
  } catch {
    return {
      ok: false,
      error: "Could not reach the server. Check your connection and try again.",
    };
  }
}
