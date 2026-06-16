/** Cookie categories aligned with GDPR / ePrivacy disclosure */
export type CookieCategory = "necessary" | "analytics" | "marketing" | "preferences";

export type CategoryConsent = Record<CookieCategory, boolean>;

export type StoredConsent = {
  /** Bump when policy/categories change to re-prompt users */
  version: number;
  /** ISO timestamp when consent was saved */
  savedAt: string;
  /** ISO timestamp when consent expires */
  expiresAt: string;
  choices: CategoryConsent;
};

export type ConsentStatus = "pending" | "granted";

export const DEFAULT_CATEGORY_CONSENT: CategoryConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};

export const ACCEPT_ALL_CONSENT: CategoryConsent = {
  necessary: true,
  analytics: true,
  marketing: true,
  preferences: true,
};

export const REJECT_NON_ESSENTIAL_CONSENT: CategoryConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  preferences: false,
};
