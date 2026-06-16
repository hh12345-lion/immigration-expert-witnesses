import type { CategoryConsent } from "./types";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Google Consent Mode v2 — call before any Google tag loads */
export function initGoogleConsentDefaults(): void {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "denied",
    personalization_storage: "denied",
    security_storage: "granted",
    wait_for_update: 500,
  });
}

/** Push consent updates when user changes preferences */
export function updateGoogleConsent(choices: CategoryConsent): void {
  if (typeof window === "undefined" || !window.gtag) return;

  const analytics = choices.analytics ? "granted" : "denied";
  const marketing = choices.marketing ? "granted" : "denied";
  const preferences = choices.preferences ? "granted" : "denied";

  window.gtag("consent", "update", {
    analytics_storage: analytics,
    ad_storage: marketing,
    ad_user_data: marketing,
    ad_personalization: marketing,
    functionality_storage: preferences,
    personalization_storage: preferences,
  });
}
