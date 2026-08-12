/**
 * Netlify Function: receives POST JSON from the site, forwards to Lead_notification_url.
 * Update BRAND_NAME when copying to another brand site.
 *
 * Outbound JSON keys (only):
 *   Full Name | Email | Phone Number | Brand name
 *
 * Production with @netlify/plugin-nextjs: prefer app/api/submit-lead/route.ts
 * (Sheets + webhook). Enable the netlify.toml redirect to use this function
 * (e.g. netlify dev / webhook-only deploys).
 */
const BRAND_NAME = "Immigration Expert Witnesses";

function getLeadNotificationUrl() {
  return (
    process.env.Lead_notification_url?.trim() ||
    process.env.LEAD_NOTIFICATION_URL?.trim() ||
    process.env.lead_notification_url?.trim() ||
    ""
  );
}

function parseBody(json) {
  if (!json || typeof json !== "object" || Array.isArray(json)) {
    return { error: "Invalid JSON body", status: 400 };
  }

  const fullName = typeof json.fullName === "string" ? json.fullName : "";
  const email = typeof json.email === "string" ? json.email : "";
  // Phone may be omitted; always coerce to string (empty allowed)
  const phone = typeof json.phone === "string" ? json.phone : "";

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
