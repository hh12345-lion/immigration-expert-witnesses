"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  tribunalEvidenceNavLinks,
  witnessTypesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";

export function Header() {
  const toggleRef = useRef<HTMLInputElement>(null);

  const closeMobileMenu = () => {
    if (toggleRef.current) toggleRef.current.checked = false;
  };

  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        closeMobileMenu();
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-surface/95 shadow-[0_1px_0_rgba(24,24,27,0.04)] backdrop-blur-md">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="group flex min-h-[44px] min-w-0 shrink items-center gap-3">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-sky font-display text-[11px] font-bold text-white"
            aria-hidden
          >
            IW
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[15px] font-semibold text-ink sm:text-base">
              Immigration Expert Witnesses
            </span>
            <span className="hidden text-[11px] text-slate sm:block">Witnesses for FTT &amp; Upper Tribunal</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 overflow-visible xl:flex" aria-label="Main">
          <NavDropdown
            label="Witness Types"
            href="/witness-types"
            items={witnessTypesNavLinks}
            scrollable
            columns={2}
          />
          <NavDropdown
            label="Case Types"
            href="/case-types"
            items={caseTypesNavLinks}
            scrollable
            columns={2}
          />
          <NavDropdown
            label="Tribunal Evidence"
            href="/tribunal-evidence"
            items={tribunalEvidenceNavLinks}
            scrollable
          />
          <NavDropdown label="Resources" href="/guides" items={resourcesNavLinks} scrollable />
          <Link
            href="/contact"
            className="ml-3 inline-flex min-h-[44px] items-center rounded-xl bg-sky px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-sky-deep"
          >
            Request a witness
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href="/contact"
            className="hidden min-h-[40px] items-center rounded-xl bg-sky px-3 py-2 text-xs font-semibold text-white sm:inline-flex"
          >
            Request
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center rounded-xl border border-line"
          >
            <span className="sr-only">Toggle menu</span>
            <svg className="icon-open h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <svg className="icon-close hidden h-5 w-5 text-ink" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>

      <nav
        id="mobile-menu"
        className="hidden border-t border-line bg-surface peer-checked:block xl:hidden"
        aria-label="Mobile"
      >
        <div className="px-4 py-4">
          {mobileNavGroups.map((group) => (
            <div key={group.title} className="mb-5">
              <p className="mb-2 font-display text-sm font-semibold text-ink">{group.title}</p>
              <ul className="space-y-0.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={closeMobileMenu}
                      className="inline-flex min-h-[40px] w-full items-center rounded-lg px-2 text-sm text-body hover:bg-paper hover:text-sky"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <Link
            href="/contact"
            onClick={closeMobileMenu}
            className="inline-flex min-h-[44px] w-full items-center justify-center rounded-xl bg-sky px-4 py-3 text-sm font-semibold text-white hover:bg-sky-deep"
          >
            Request a witness
          </Link>
        </div>
      </nav>
    </header>
  );
}
