/** Brand label sent to Lead_notification_url webhook (n8n). */
export const LEAD_BRAND_NAME = "Immigration Expert Witnesses";

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

/** Outbound JSON keys expected by n8n / Lead_notification_url. */
export function buildLeadWebhookPayload(input: SubmitLeadInput) {
  return {
    "Full Name": input.fullName.trim(),
    Email: input.email.trim(),
    "Phone Number": input.phone.trim(),
    "Brand name": LEAD_BRAND_NAME,
  };
}

export function getLeadWebhookUrl(): string | undefined {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    undefined
  );
}

/** POST lead data to /api/submit-lead (Google Sheets + optional webhook). */
export async function postSubmitLead(payload: SubmitLeadPayload): Promise<boolean> {
  try {
    const res = await fetch("/api/submit-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        fullName: payload.fullName,
        email: payload.email,
        phone: payload.phone ?? "",
        organisation: payload.organisation ?? "",
        witnessType: payload.witnessType ?? "",
        country: payload.country ?? "",
        caseType: payload.caseType ?? "",
        funding: payload.funding ?? "",
        summary: payload.summary ?? "",
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}
