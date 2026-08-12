"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORY_META } from "@/lib/cookies/constants";
import type { CategoryConsent, CookieCategory } from "@/lib/cookies/types";
import { useCookieConsent } from "./CookieConsentContext";

const CATEGORIES: CookieCategory[] = ["necessary", "analytics", "marketing", "preferences"];

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function CategoryToggle({
  category,
  checked,
  onChange,
}: {
  category: CookieCategory;
  checked: boolean;
  onChange: (value: boolean) => void;
}) {
  const meta = CATEGORY_META[category];

  return (
    <li className="rounded-[8px] border border-[#c3c7c0] bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-semibold text-[#121614]">{meta.label}</p>
          <p className="mt-1 text-sm leading-relaxed text-[#3d443f]">{meta.description}</p>
          {meta.required && (
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#6e2433]">
              Always active
            </p>
          )}
        </div>
        <label className="relative inline-flex shrink-0 cursor-pointer items-center">
          <input
            type="checkbox"
            className="peer sr-only"
            checked={checked}
            disabled={meta.required}
            onChange={(e) => onChange(e.target.checked)}
            aria-label={`${meta.label} cookies`}
          />
          <span
            className={`relative block h-7 w-12 rounded-full transition-colors duration-200 ${
              meta.required
                ? "bg-[#121614]/35"
                : "bg-[#c3c7c0] peer-focus-visible:ring-2 peer-focus-visible:ring-[#3a5244] peer-focus-visible:ring-offset-2 peer-checked:bg-[#3a5244]"
            }`}
            aria-hidden
          >
            <span
              className={`absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform duration-200 ${
                checked ? "translate-x-5" : "translate-x-0"
              }`}
            />
          </span>
        </label>
      </div>
    </li>
  );
}

export function CookiePreferencesModal() {
  const {
    isPreferencesOpen,
    closePreferences,
    choices,
    savePreferences,
    acceptAll,
    rejectNonEssential,
  } = useCookieConsent();

  const [draft, setDraft] = useState<CategoryConsent>(choices);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isPreferencesOpen) setDraft(choices);
  }, [isPreferencesOpen, choices]);

  useEffect(() => {
    if (!isPreferencesOpen) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closePreferences();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = [...dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)].filter(
        (el) => !el.hasAttribute("disabled") && el.offsetParent !== null
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [isPreferencesOpen, closePreferences]);

  const toggle = useCallback((key: CookieCategory, value: boolean) => {
    if (key === "necessary") return;
    setDraft((d) => ({ ...d, [key]: value }));
  }, []);

  if (!isPreferencesOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center sm:p-4"
      style={{ paddingBottom: "max(0px, env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#121614]/60 backdrop-blur-[3px] animate-[fadeIn_0.2s_ease-out]"
        aria-label="Close cookie preferences"
        onClick={closePreferences}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-prefs-title"
        className="relative z-10 flex max-h-[min(90vh,640px)] w-full max-w-lg flex-col overflow-hidden rounded-t-[8px] border border-[#c3c7c0] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.25)] sm:rounded-[8px] animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)] sm:animate-[fadeIn_0.25s_ease-out]"
      >
        <div className="border-b border-[#c3c7c0] bg-[#121614] px-5 py-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#6e2433]">
            Cookie settings
          </p>
          <h2 id="cookie-prefs-title" className="mt-1 text-lg font-bold text-white">
            Customize your preferences
          </h2>
          <p className="mt-1 text-sm text-white/75">
            Choose which cookies we may use.{" "}
            <Link href="/cookie-policy" className="text-[#6e2433] hover:underline" onClick={closePreferences}>
              Cookie Policy
            </Link>
            {" · "}
            <Link href="/privacy" className="text-[#6e2433] hover:underline" onClick={closePreferences}>
              Privacy Policy
            </Link>
          </p>
        </div>

        <div className="flex-1 overflow-y-auto bg-[#e6e8e4] px-5 py-4 sm:px-6">
          <ul className="space-y-3">
            {CATEGORIES.map((key) => (
              <CategoryToggle
                key={key}
                category={key}
                checked={draft[key]}
                onChange={(value) => toggle(key, value)}
              />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-2 border-t border-[#c3c7c0] bg-white p-4 sm:flex-row sm:flex-wrap sm:justify-end">
          <button
            type="button"
            ref={closeBtnRef}
            onClick={closePreferences}
            className="min-h-[44px] rounded-[4px] border border-[#c3c7c0] px-4 py-2 text-sm font-medium text-[#3d443f] transition hover:bg-[#e6e8e4]"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={rejectNonEssential}
            className="min-h-[44px] rounded-[4px] border border-[#121614] px-4 py-2 text-sm font-semibold text-[#121614] transition hover:bg-[#e6e8e4]"
          >
            Reject Non-Essential
          </button>
          <button
            type="button"
            onClick={() => savePreferences(draft)}
            className="min-h-[44px] rounded-[4px] bg-[#121614] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#142035]"
          >
            Save Preferences
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="min-h-[44px] rounded-[4px] bg-[#6e2433] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#5a1d29]"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
