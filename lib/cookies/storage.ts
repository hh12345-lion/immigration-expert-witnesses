import {
  CONSENT_EXPIRY_DAYS,
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
} from "./constants";
import {
  type StoredConsent,
  type CategoryConsent,
  DEFAULT_CATEGORY_CONSENT,
} from "./types";

function addDays(date: Date, days: number): Date {
  const d = new Date(date);
  d.setDate(d.getDate() + days);
  return d;
}

export function isConsentExpired(stored: StoredConsent): boolean {
  return new Date(stored.expiresAt).getTime() <= Date.now();
}

export function isStoredConsentValid(stored: StoredConsent | null): stored is StoredConsent {
  if (!stored) return false;
  if (stored.version !== CONSENT_VERSION) return false;
  if (!stored.choices?.necessary) return false;
  if (isConsentExpired(stored)) return false;
  return true;
}

/** Read consent from localStorage (client-only) */
export function readStoredConsent(): StoredConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    return isStoredConsentValid(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

/** Persist consent with expiry */
export function writeStoredConsent(choices: CategoryConsent): StoredConsent {
  const now = new Date();
  const stored: StoredConsent = {
    version: CONSENT_VERSION,
    savedAt: now.toISOString(),
    expiresAt: addDays(now, CONSENT_EXPIRY_DAYS).toISOString(),
    choices: {
      ...DEFAULT_CATEGORY_CONSENT,
      ...choices,
      necessary: true,
    },
  };
  if (typeof window !== "undefined") {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  }
  return stored;
}

export function clearStoredConsent(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(CONSENT_STORAGE_KEY);
  }
}
