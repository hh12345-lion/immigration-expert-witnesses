import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-ink bg-ink text-chalk">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-6 px-4 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-6 sm:py-10 lg:px-8">
        <div className="min-w-0">
          <p className="font-display text-xl tracking-tight text-chalk sm:text-2xl">{SITE_NAME}</p>
          <a
            href={`mailto:${SITE_EMAIL}`}
            className="mt-2 inline-flex min-h-[44px] items-center text-sm text-chalk/70 transition-colors hover:text-chalk"
          >
            {SITE_EMAIL}
          </a>
        </div>

        <nav
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs uppercase tracking-[0.14em] text-chalk/55"
          aria-label="Legal"
        >
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-chalk">
            Privacy
          </Link>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-chalk">
            Cookies
          </Link>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-chalk">
            Terms
          </Link>
          <CookieSettingsButton variant="footer" />
          <Link href="/contact" className="inline-flex min-h-[44px] items-center text-chalk/80 hover:text-chalk">
            Instruct
          </Link>
        </nav>
      </div>
    </footer>
  );
}
