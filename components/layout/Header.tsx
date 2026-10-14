"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  caseTypesNavLinks,
  mobileNavGroups,
  resourcesNavLinks,
  tribunalEvidenceNavLinks,
  witnessTypesNavLinks,
} from "@/data/navigation";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { Logo } from "@/components/brand/Brand";

const RESOURCE_PATHS = ["/guides", ...resourcesNavLinks.map((l) => l.href).filter((h) => h !== "/blog")];

function within(path: string, base: string) {
  return path === base || path.startsWith(base + "/");
}

/** Client only for usePathname, so the current section is marked. Menus open with CSS. */
export function Header() {
  const pathname = usePathname() || "/";
  const section = {
    witness: within(pathname, "/witness-types"),
    cases: within(pathname, "/case-types"),
    tribunal: within(pathname, "/tribunal-evidence"),
    resources: RESOURCE_PATHS.some((p) => within(pathname, p)),
    blog: within(pathname, "/blog"),
    contact: within(pathname, "/contact"),
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-paper/95 backdrop-blur-md">
      {/* Keyed on the path so the mobile menu closes after each navigation. */}
      <input key={pathname} id="mobile-nav-toggle" type="checkbox" className="peer sr-only" aria-label="Toggle menu" />

      <div className="header-bar mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Immigration Expert Witnesses, home" className="flex min-h-[44px] min-w-0 shrink items-center">
          <Logo priority className="h-8 w-auto min-[400px]:h-9 sm:h-10" />
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main">
          <NavDropdown
            label="Witness types"
            href="/witness-types"
            items={witnessTypesNavLinks}
            active={section.witness}
            currentPath={pathname}
            columns={2}
          />
          <NavDropdown
            label="Case types"
            href="/case-types"
            items={caseTypesNavLinks}
            active={section.cases}
            currentPath={pathname}
            columns={2}
          />
          <NavDropdown
            label="Tribunal evidence"
            href="/tribunal-evidence"
            items={tribunalEvidenceNavLinks}
            active={section.tribunal}
            currentPath={pathname}
          />
          <NavDropdown
            label="Resources"
            href="/guides"
            items={resourcesNavLinks}
            active={section.resources}
            currentPath={pathname}
            scrollable
            align="right"
          />
          <Link
            href="/blog"
            aria-current={section.blog ? "page" : undefined}
            className={`tile-cut-sm inline-flex min-h-[44px] items-center px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
              section.blog ? "bg-forest text-cream" : "text-charcoal hover:bg-sage hover:text-forest"
            }`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            aria-current={section.contact ? "page" : undefined}
            className={`tile-cut-sm ml-3 inline-flex min-h-[46px] items-center gap-2 px-5 py-2 text-sm font-bold text-cream transition-colors ${
              section.contact ? "bg-forest ring-2 ring-mauve ring-offset-2 ring-offset-paper" : "bg-mauve hover:bg-oxblood-deep"
            }`}
          >
            Request a witness
          </Link>
        </nav>

        <div className="flex items-center gap-2 xl:hidden">
          <Link
            href="/contact"
            className="tile-cut-sm hidden min-h-[42px] items-center bg-mauve px-4 py-2 text-sm font-bold text-cream sm:inline-flex"
          >
            Request a witness
          </Link>
          <label
            htmlFor="mobile-nav-toggle"
            className="tile-cut-sm inline-flex min-h-[44px] min-w-[44px] shrink-0 cursor-pointer items-center justify-center bg-forest text-cream"
          >
            <span className="sr-only">Menu</span>
            <svg className="icon-open h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h10" />
            </svg>
            <svg className="icon-close hidden h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>
      </div>

      <nav id="mobile-menu" className="hidden border-t border-line bg-paper peer-checked:block xl:hidden" aria-label="Mobile">
        <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6">
          {mobileNavGroups.map((group) => {
            const open = group.links.some((l) => l.href === pathname);
            return (
              <details key={group.title} className="mobile-group border-b border-line" open={open}>
                <summary className="flex min-h-[52px] cursor-pointer items-center justify-between font-display text-base font-bold text-forest">
                  {group.title}
                  <svg className="group-chevron h-4 w-4 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <ul className="pb-3">
                  {group.links.map((link) => {
                    const current = link.href === pathname;
                    return (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          aria-current={current ? "page" : undefined}
                          className={`flex min-h-[42px] w-full items-center rounded-lg px-3 text-sm ${
                            current ? "bg-forest font-semibold text-cream" : "text-body hover:bg-sage hover:text-forest"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </details>
            );
          })}
          <Link
            href="/contact"
            className="tile-cut-sm mt-4 inline-flex min-h-[48px] w-full items-center justify-center bg-mauve px-4 py-3 text-sm font-bold text-cream"
          >
            Request a witness
          </Link>
        </div>
      </nav>
    </header>
  );
}
