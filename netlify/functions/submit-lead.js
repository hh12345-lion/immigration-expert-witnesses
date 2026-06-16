/**
 * Netlify Function: receives POST JSON from the site, forwards to webhook.
 * Update BRAND_NAME when copying to another brand site.
 * Production: @netlify/plugin-nextjs handles POST via app/api/submit-lead/route.ts.
 * Use this function with `netlify dev` when the redirect below is enabled.
 */
const BRAND_NAME = "Immigration Expert Witnesses";

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    ""
  );
}

function parseBody(json) {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return { error: "Invalid JSON body", status: 400 };
  }
  const { fullName, email, phone } = json;
  if (
    typeof fullName !== "string" ||
    typeof email !== "string" ||
    typeof phone !== "string"
  ) {
    return { error: "fullName, email, and phone must be strings", status: 400 };
  }
  if (!fullName.trim() || !email.trim()) {
    return { error: "fullName and email are required", status: 400 };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { error: "Invalid email address", status: 400 };
  }
  return { ok: { fullName, email, phone } };
}

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  let json;
  try {
    json = JSON.parse(event.body || "{}");
  } catch {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid JSON" }),
    };
  }

  const parsed = parseBody(json);
  if (parsed.error) {
    return {
      statusCode: parsed.status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: parsed.error }),
    };
  }

  const url = getLeadNotificationUrl();
  if (!url) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Lead notification URL is not configured" }),
    };
  }

  const outbound = {
    "Full Name": parsed.ok.fullName.trim(),
    Email: parsed.ok.email.trim(),
    "Phone Number": parsed.ok.phone.trim(),
    "Brand name": BRAND_NAME,
  };

  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 12_000);
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(outbound),
      signal: ac.signal,
    });
    if (!res.ok) {
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: "Lead notification endpoint returned an error" }),
      };
    }
  } catch {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Could not reach lead notification endpoint" }),
    };
  } finally {
    clearTimeout(t);
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true }),
  };
};
