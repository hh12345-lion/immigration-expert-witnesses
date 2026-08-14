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
      className={`relative ${open ? "nav-panel-open" : ""}`}
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
        className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm transition-colors ${
          open ? "bg-paper text-sky" : "text-ink/80 hover:bg-paper hover:text-ink"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-3.5 w-3.5 opacity-50 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`nav-panel absolute left-1/2 top-full z-[70] w-[min(92vw,28rem)] -translate-x-1/2 pt-2 ${
          columns === 2 ? "lg:w-[min(92vw,36rem)]" : ""
        }`}
      >
        <div className="overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_18px_40px_rgba(24,24,27,0.12)]">
          <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
            <p className="font-display text-sm font-semibold text-ink">{label}</p>
            <Link href={href} className="text-xs font-semibold text-sky hover:text-sky-deep">
              View all
            </Link>
          </div>
          <ul
            className={`grid gap-0.5 p-2 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"} ${
              scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""
            }`}
            role="menu"
          >
            {items.map((item) => (
              <li key={item.href} role="none">
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block rounded-xl px-3 py-2.5 hover:bg-paper focus:bg-paper focus:outline-none"
                >
                  <span className="block text-sm font-medium text-ink">{item.label}</span>
                  {item.blurb && (
                    <span className="mt-0.5 block text-[11px] leading-snug text-slate">{item.blurb}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
