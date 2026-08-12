"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = {
  label: string;
  href: string;
  blurb?: string;
};

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
  columns?: 1 | 2;
};

export function NavDropdown({
  label,
  href,
  items,
  scrollable,
  columns = 1,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`relative ${open ? "nav-folio-open" : ""}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <Link
        href={href}
        className={`inline-flex min-h-[44px] items-center gap-2 px-2.5 py-2 text-[13px] tracking-wide transition-colors ${
          open ? "text-oxblood" : "text-ink/80 hover:text-ink"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="nav-trigger-mark shrink-0" aria-hidden />
        {label}
      </Link>

      <div
        className={`nav-folio absolute left-1/2 top-full z-[70] w-[min(92vw,28rem)] -translate-x-1/2 pt-3 ${
          columns === 2 ? "lg:w-[min(92vw,36rem)]" : ""
        }`}
      >
        <div className="border border-rule bg-chalk shadow-[0_18px_40px_rgba(18,22,20,0.12)]">
          <div className="flex items-stretch">
            <div className="w-1.5 shrink-0 bg-oxblood" aria-hidden />
            <div className="min-w-0 flex-1">
              <div className="flex items-baseline justify-between gap-4 border-b border-rule px-4 py-3">
                <p className="font-display text-sm text-ink">{label}</p>
                <Link
                  href={href}
                  className="text-[11px] font-semibold uppercase tracking-[0.14em] text-moss hover:text-oxblood"
                >
                  View all
                </Link>
              </div>
              <ul
                className={`grid gap-0 p-2 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"} ${
                  scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""
                }`}
                role="menu"
              >
                {items.map((item, i) => (
                  <li key={item.href} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className="group flex gap-3 px-3 py-2.5 hover:bg-paper focus:bg-paper focus:outline-none"
                    >
                      <span className="mt-0.5 w-5 shrink-0 font-display text-[11px] text-brass tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm text-ink group-hover:text-oxblood">
                          {item.label}
                        </span>
                        {item.blurb && (
                          <span className="mt-0.5 block text-[11px] leading-snug text-body/80">
                            {item.blurb}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
