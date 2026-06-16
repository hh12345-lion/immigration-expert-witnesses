export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.immigrationexpertwitnesses.com";
export const SITE_NAME = "Immigration Expert Witnesses";
export const SITE_EMAIL = "info@immigrationexpertwitnesses.com";
export const SISTER_HUB_URL = "https://www.immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertwitnesses";

export const COLORS = {
  primary: "#1A2744",
  accent: "#1A6B78",
  gold: "#B8943E",
  background: "#FFFFFF",
  sectionAlt: "#F3F6F9",
  border: "#C5D0DC",
  heading: "#1A2744",
  body: "#374151",
} as const;
