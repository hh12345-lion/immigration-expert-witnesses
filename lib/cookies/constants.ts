import type { CookieCategory } from "./types";

/** localStorage key — versioned to allow migration */
export const CONSENT_STORAGE_KEY = "iew_cookie_consent_v1";

/** Increment to invalidate stored consent and show banner again */
export const CONSENT_VERSION = 1;

/** GDPR common practice: re-ask annually */
export const CONSENT_EXPIRY_DAYS = 365;

export const CATEGORY_META: Record<
  CookieCategory,
  { label: string; description: string; required: boolean }
> = {
  necessary: {
    label: "Necessary Cookies",
    description:
      "Required for the site to function securely — consent storage, load balancing, and fraud prevention. Cannot be disabled.",
    required: true,
  },
  analytics: {
    label: "Analytics",
    description:
      "Help us understand how solicitors use our resources (Google Analytics, Google Tag Manager, Hotjar). Data is aggregated where possible.",
    required: false,
  },
  marketing: {
    label: "Marketing",
    description:
      "Measure advertising performance and reach relevant audiences (Meta Pixel, LinkedIn Insight Tag).",
    required: false,
  },
  preferences: {
    label: "Preferences",
    description:
      "Remember choices such as display settings to improve your experience on return visits.",
    required: false,
  },
};
