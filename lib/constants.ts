const DEFAULT_SITE_URL = "https://immigrationexpertwitnesses.com";

/** Canonical origin for SEO: strips www; ignores localhost/netlify preview env. */
export function getPublicSiteUrl(): string {
  const fallback = DEFAULT_SITE_URL;
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return fallback;
  try {
    const u = new URL(/^https?:\/\//i.test(raw) ? raw : `https://${raw}`);
    if (
      u.hostname === "localhost" ||
      u.hostname === "127.0.0.1" ||
      u.hostname.endsWith(".netlify.app")
    ) {
      return fallback;
    }
    u.hostname = u.hostname.replace(/^www\./i, "");
    return u.origin.replace(/\/$/, "");
  } catch {
    return fallback;
  }
}

export const SITE_URL = getPublicSiteUrl();
export const SITE_NAME = "Immigration Expert Witnesses";
export const SITE_EMAIL = "cases@immigrationexpertwitnesses.com";
export const SISTER_HUB_URL = "https://immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertwitnesses";

export const COLORS = {
  primary: "#141a16",
  accent: "#725865",
  gold: "#725865",
  background: "#f9f6f1",
  sectionAlt: "#f1ede5",
  border: "#e3ddd2",
  heading: "#141a16",
  body: "#474843",
  ink: "#141a16",
  paper: "#f9f6f1",
  surface: "#ffffff",
  sky: "#725865",
} as const;
