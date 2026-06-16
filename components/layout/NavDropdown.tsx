"use client";

import Link from "next/link";
import { useState } from "react";

export type NavDropdownItem = { label: string; href: string };

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  scrollable?: boolean;
};

export function NavDropdown({ label, href, items, scrollable }: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
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
        className={`inline-flex min-h-[44px] items-center gap-1 rounded-[4px] px-2 py-2 text-sm hover:bg-[#F3F6F9] hover:text-[#1A2744] ${open ? "bg-[#F3F6F9] text-[#1A2744]" : "text-[#374151]"}`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {label}
        <svg
          className={`h-4 w-4 opacity-60 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`absolute left-0 top-full z-[60] pt-2 ${scrollable ? "min-w-[280px]" : "min-w-[240px]"} ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"} transition-opacity duration-150`}
      >
        <ul
          className={`rounded-[4px] border border-[#C5D0DC] bg-white py-2 shadow-[0_4px_16px_rgba(0,0,0,0.1)] ${scrollable ? "max-h-[min(70vh,22rem)] overflow-y-auto" : ""}`}
          role="menu"
        >
          {items.map((item) => (
            <li key={item.href} role="none">
              <Link
                href={item.href}
                role="menuitem"
                className="block px-4 py-2.5 text-sm text-[#374151] hover:bg-[#F3F6F9] hover:text-[#1A2744] focus:bg-[#F3F6F9] focus:text-[#1A2744] focus:outline-none"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
