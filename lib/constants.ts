export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.immigrationexpertwitnesses.com";
export const SITE_NAME = "Immigration Expert Witnesses";
export const SITE_EMAIL = "cases@immigrationexpertwitnesses.com";
export const SISTER_HUB_URL = "https://www.immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertwitnesses";

export const COLORS = {
  primary: "#18181b",
  accent: "#0284c7",
  gold: "#0284c7",
  background: "#f4f6f8",
  sectionAlt: "#eef2f6",
  border: "#e2e8f0",
  heading: "#18181b",
  body: "#3f4654",
  ink: "#18181b",
  paper: "#f4f6f8",
  surface: "#ffffff",
  sky: "#0284c7",
} as const;
