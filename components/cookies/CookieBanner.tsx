"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-sky px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-sky sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-xl border border-white/30 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto";
const btnGhost =
  "inline-flex min-h-[44px] w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium text-white/90 underline-offset-2 transition hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:w-auto";

export function CookieBanner() {
  const { status, acceptAll, rejectNonEssential, openPreferences } = useCookieConsent();
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (status === "pending") {
      acceptRef.current?.focus();
    }
  }, [status]);

  if (status !== "pending") return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
      aria-modal="false"
      className="fixed inset-x-0 bottom-0 z-[100] px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-6 animate-[slideUp_0.45s_cubic-bezier(0.22,1,0.36,1)]"
    >
      <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-[0_-8px_40px_rgba(24,24,27,0.35)]">
        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold text-sky">Privacy &amp; cookies</p>
              <h2 id="cookie-banner-title" className="mt-1.5 font-display text-xl font-semibold text-white sm:text-2xl">
                Choose what we store
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-white/70">
                Essential cookies keep the site working. Analytics and marketing load only with consent.
                Read our{" "}
                <Link href="/cookie-policy" className="font-semibold text-white underline underline-offset-2 hover:text-sky">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-white underline underline-offset-2 hover:text-sky">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap lg:max-w-md lg:shrink-0 lg:justify-end">
              <button ref={acceptRef} type="button" onClick={acceptAll} className={btnPrimary}>
                Accept All
              </button>
              <button type="button" onClick={rejectNonEssential} className={btnSecondary}>
                Reject Non-Essential
              </button>
              <button type="button" onClick={openPreferences} className={btnGhost}>
                Customize Preferences
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
