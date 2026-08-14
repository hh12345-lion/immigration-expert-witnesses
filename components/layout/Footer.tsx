import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t-4 border-sky bg-surface text-ink">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-10 lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">{SITE_NAME}</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-2 inline-flex min-h-[44px] items-center text-sm text-slate transition-colors hover:text-sky"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-slate"
          aria-label="Legal"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-ink">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center font-semibold text-sky hover:text-sky-deep">
            Request a witness
          </Link>
        </nav>
      </div>
    </footer>
  );
}
