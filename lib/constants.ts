export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.immigrationexpertwitnesses.com";
export const SITE_NAME = "Immigration Expert Witnesses";
export const SITE_EMAIL = "cases@immigrationexpertwitnesses.com";
export const SISTER_HUB_URL = "https://www.immigrationexpertreports.com";
export const LINKEDIN_URL =
  "https://www.linkedin.com/company/immigrationexpertwitnesses";

export const COLORS = {
  primary: "#121614",
  accent: "#3a5244",
  gold: "#6e2433",
  background: "#e6e8e4",
  sectionAlt: "#e6e8e4",
  border: "#c3c7c0",
  heading: "#121614",
  body: "#3d443f",
  ink: "#121614",
  paper: "#e6e8e4",
  chalk: "#f2f3f0",
  oxblood: "#6e2433",
  moss: "#3a5244",
  brass: "#7a6b52",
} as const;
