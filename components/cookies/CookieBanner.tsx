"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { useCookieConsent } from "./CookieConsentContext";

const btnPrimary =
  "inline-flex min-h-[44px] w-full items-center justify-center bg-oxblood px-5 py-2.5 text-sm font-semibold text-chalk transition hover:bg-oxblood-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-oxblood focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";
const btnSecondary =
  "inline-flex min-h-[44px] w-full items-center justify-center border border-chalk/35 bg-chalk/5 px-5 py-2.5 text-sm font-semibold text-chalk transition hover:bg-chalk/12 focus:outline-none focus-visible:ring-2 focus-visible:ring-chalk focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:w-auto";
const btnGhost =
  "inline-flex min-h-[44px] w-full items-center justify-center px-4 py-2.5 text-sm font-medium text-chalk/90 underline-offset-2 transition hover:bg-chalk/8 hover:text-chalk hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-chalk sm:w-auto";

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
      <div className="mx-auto max-w-5xl overflow-hidden border border-rule/40 bg-ink shadow-[0_-8px_40px_rgba(18,22,20,0.35)]">
        <div className="h-1 bg-oxblood" aria-hidden />

        <div className="p-5 sm:p-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">
                Privacy &amp; cookies
              </p>
              <h2 id="cookie-banner-title" className="mt-1.5 font-display text-xl text-chalk sm:text-2xl">
                Choose what we store
              </h2>
              <p id="cookie-banner-desc" className="mt-2 text-sm leading-relaxed text-chalk/75">
                Essential cookies keep the site working. Analytics and marketing load only with consent.
                Read our{" "}
                <Link href="/cookie-policy" className="font-semibold text-chalk underline underline-offset-2 hover:text-oxblood">
                  Cookie Policy
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-chalk underline underline-offset-2 hover:text-oxblood">
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
