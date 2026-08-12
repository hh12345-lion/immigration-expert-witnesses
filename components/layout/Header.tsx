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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-6">
      <input
        ref={toggleRef}
        id="mobile-nav-toggle"
        type="checkbox"
        className="peer sr-only"
        aria-hidden
      />

      <div className="header-shell mx-auto max-w-7xl border border-rule/80 bg-chalk/95 shadow-[0_12px_32px_rgba(18,22,20,0.08)] backdrop-blur-md">
        <div className="header-bar flex items-center justify-between gap-3 px-3 py-2.5 sm:px-4 lg:px-5">
          <Link
            href="/"
            className="group flex min-h-[44px] min-w-0 shrink items-center gap-3"
          >
            <span
              className="flex h-10 w-10 shrink-0 items-center justify-center bg-ink font-display text-[11px] font-semibold tracking-[0.08em] text-chalk transition-colors group-hover:bg-oxblood"
              aria-hidden
            >
              IEW
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block truncate font-display text-[15px] text-ink sm:text-base">
                Immigration Expert Witnesses
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.18em] text-brass sm:block">
                Tribunal evidence network
              </span>
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
            <NavDropdown
              label="Resources"
              href="/guides"
              items={resourcesNavLinks}
              scrollable
            />
            <Link
              href="/contact"
              className="ml-3 inline-flex min-h-[44px] items-center bg-oxblood px-4 py-2 text-[13px] font-semibold tracking-wide text-chalk transition-colors hover:bg-oxblood-deep"
            >
              Instruct
            </Link>
          </nav>

          <div className="flex items-center gap-2 xl:hidden">
            <Link
              href="/contact"
              className="hidden min-h-[40px] items-center bg-oxblood px-3 py-2 text-xs font-semibold text-chalk sm:inline-flex"
            >
              Instruct
            </Link>
            <label
              htmlFor="mobile-nav-toggle"
              className="mobile-nav-label inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center border border-rule"
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
          className="hidden border-t border-rule bg-chalk peer-checked:block xl:hidden"
          aria-label="Mobile"
        >
          <div className="px-4 py-4">
            {mobileNavGroups.map((group) => (
              <div key={group.title} className="mb-5">
                <p className="mb-2 font-display text-sm text-ink">{group.title}</p>
                <ul className="space-y-0.5 border-l border-rule pl-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className="inline-flex min-h-[40px] w-full items-center text-sm text-body hover:text-oxblood"
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
              className="inline-flex min-h-[44px] w-full items-center justify-center bg-oxblood px-4 py-3 text-sm font-semibold text-chalk hover:bg-oxblood-deep"
            >
              Instruct an Expert Witness
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
