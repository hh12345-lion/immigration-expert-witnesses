import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { Globe, LogoLight } from "@/components/brand/Brand";
import { SITE_EMAIL } from "@/lib/constants";
import { witnessTypes } from "@/data/witness-types";
import { caseTypes } from "@/data/case-types";

const RESOURCES = [
  { label: "How to instruct", href: "/how-to-instruct" },
  { label: "Expert witness framework", href: "/expert-witness-framework" },
  { label: "Oral evidence", href: "/oral-evidence" },
  { label: "Tribunal evidence", href: "/tribunal-evidence" },
  { label: "Guides", href: "/guides" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Glossary", href: "/glossary" },
  { label: "FAQ", href: "/faq" },
];

const COMPANY = [
  { label: "What is an expert witness?", href: "/what-is-an-immigration-expert-witness" },
  { label: "Services", href: "/services" },
  { label: "Fees and Legal Aid", href: "/fees" },
  { label: "Network directory", href: "/network" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const LEGAL = [
  { label: "Privacy", href: "/privacy" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Terms", href: "/terms" },
  { label: "Image credits", href: "/image-credits" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div className="min-w-0">
      <p className="font-display text-xs font-bold uppercase tracking-[0.22em] text-[#B79FAB]">{title}</p>
      <ul className="mt-4 space-y-1">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="inline-flex min-h-[36px] items-center text-sm text-cream/75 transition-colors hover:text-cream">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden bg-night text-cream">
      {/* The road of the monogram, sweeping across the top edge of the footer. */}
      <svg aria-hidden viewBox="0 0 1440 90" preserveAspectRatio="none" className="block h-12 w-full sm:h-16">
        <path d="M0 0 H1440 V18 C 1100 18, 760 86, 0 70 Z" fill="#F9F6F1" />
        <path d="M1440 34 C 1100 34, 760 100, 0 86" fill="none" stroke="#725865" strokeWidth="2" vectorEffect="non-scaling-stroke" />
      </svg>
      <Globe className="pointer-events-none absolute -bottom-40 -right-32 h-[30rem] w-[30rem] text-moss/25" />

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div className="min-w-0">
            <Link href="/" aria-label="Immigration Expert Witnesses, home" className="inline-block">
              <LogoLight className="h-28 w-auto sm:h-32" />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Independent expert witnesses for asylum and immigration proceedings in the First-tier and Upper
              Tribunal. We route instructions to the right discipline. We are not a law firm and do not give legal
              advice.
            </p>
            <a
              href={`mailto:${SITE_EMAIL}`}
              className="mt-5 inline-flex min-h-[44px] items-center text-sm font-semibold text-cream underline decoration-mauve underline-offset-4 hover:text-[#D8C6CF]"
            >
              {SITE_EMAIL}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            <Column
              title="Witnesses"
              links={witnessTypes.slice(0, 6).map((w) => ({ label: w.title, href: `/witness-types/${w.slug}` }))}
            />
            <Column
              title="Case types"
              links={caseTypes.slice(0, 6).map((c) => ({ label: c.title, href: `/case-types/${c.slug}` }))}
            />
            <Column title="Resources" links={RESOURCES} />
            <Column title="About" links={COMPANY} />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-cream/55">
            &copy; {new Date().getFullYear()} Immigration Expert Witnesses
          </p>
          <nav aria-label="Legal" className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-cream/65">
            {LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex min-h-[40px] items-center hover:text-cream">
                {l.label}
              </Link>
            ))}
            <CookieSettingsButton variant="footer" />
          </nav>
        </div>
      </div>
    </footer>
  );
}
