import Link from "next/link";
import { CookieSettingsButton } from "@/components/cookies";
import { SITE_EMAIL, SISTER_HUB_URL } from "@/lib/constants";
import { witnessTypes } from "@/data/witness-types";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="border-t border-[#C5D0DC] bg-[#1A2744] text-white">
      <div className="mx-auto min-w-0 max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 font-semibold text-[#B8943E]">Services</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="inline-flex min-h-[44px] items-center hover:text-white">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8943E]">Witness Types</h3>
            <ul className="space-y-2 text-sm text-white/80">
              {witnessTypes.slice(0, 5).map((w) => (
                <li key={w.slug}>
                  <Link
                    href={`/witness-types/${w.slug}`}
                    className="inline-flex min-h-[44px] items-center hover:text-white"
                  >
                    {w.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/witness-types" className="text-[#B8943E] hover:underline">
                  View all witness types
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8943E]">Resources</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/expert-witness-framework" className="inline-flex min-h-[44px] items-center hover:text-white">Expert Witness Framework</Link></li>
              <li><Link href="/oral-evidence" className="inline-flex min-h-[44px] items-center hover:text-white">Oral Evidence Guide</Link></li>
              <li><Link href="/guides" className="inline-flex min-h-[44px] items-center hover:text-white">Solicitor Guides</Link></li>
              <li><Link href="/how-to-instruct" className="inline-flex min-h-[44px] items-center hover:text-white">How to Instruct</Link></li>
              <li><Link href="/network" className="inline-flex min-h-[44px] items-center hover:text-white">Network Directory</Link></li>
              <li><Link href="/qualifications" className="inline-flex min-h-[44px] items-center hover:text-white">Qualifications</Link></li>
              <li><Link href="/glossary" className="inline-flex min-h-[44px] items-center hover:text-white">Glossary</Link></li>
              <li>
                <a
                  href={SISTER_HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center hover:text-white"
                >
                  Expert Reports Hub
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-[#B8943E]">Contact</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="break-all hover:text-white">
                  {SITE_EMAIL}
                </a>
              </li>
              <li>
                <Link href="/contact" className="font-semibold text-[#1A6B78] hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          Immigration Expert Witnesses is the network master hub for expert witnesses in immigration tribunal
          proceedings — qualifications, oral evidence, CPR Part 35 duties, and tribunal appearance. Report standards
          are maintained at{" "}
          <a href={SISTER_HUB_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            immigrationexpertreports.com
          </a>
          . We are not a law firm and do not provide legal advice.
        </p>
        <p className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center text-xs text-white/50">
          <Link href="/privacy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Privacy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/cookie-policy" className="inline-flex min-h-[44px] items-center hover:text-white">
            Cookie Policy
          </Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms" className="inline-flex min-h-[44px] items-center hover:text-white">
            Terms
          </Link>
          <span aria-hidden="true">·</span>
          <CookieSettingsButton variant="footer" />
        </p>
      </div>
    </footer>
  );
}
