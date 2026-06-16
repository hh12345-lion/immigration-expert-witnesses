"use client";

import { useCookieConsent } from "./CookieConsentContext";

type Props = {
  className?: string;
  variant?: "footer" | "inline";
};

export function CookieSettingsButton({ className = "", variant = "footer" }: Props) {
  const { openPreferences } = useCookieConsent();

  const base =
    variant === "footer"
      ? "inline-flex min-h-[44px] items-center text-sm text-white/70 hover:text-[#B8943E] focus:outline-none focus-visible:underline"
      : "inline-flex min-h-[44px] items-center text-sm font-medium text-[#1A6B78] hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6B78]";

  return (
    <button type="button" onClick={openPreferences} className={`${base} ${className}`}>
      Cookie Settings
    </button>
  );
}
