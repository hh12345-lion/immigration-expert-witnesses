import Link from "next/link";

export type NavDropdownItem = {
  label: string;
  href: string;
  blurb?: string;
};

type NavDropdownProps = {
  label: string;
  href: string;
  items: NavDropdownItem[];
  active?: boolean;
  currentPath?: string;
  scrollable?: boolean;
  columns?: 1 | 2;
  align?: "left" | "center" | "right";
};

/** A top level menu item whose panel opens on hover or keyboard focus, with no client state. */
export function NavDropdown({
  label,
  href,
  items,
  active,
  currentPath,
  scrollable,
  columns = 1,
  align = "center",
}: NavDropdownProps) {
  const position =
    align === "left" ? "left-0" : align === "right" ? "right-0" : "left-1/2 -translate-x-1/2";
  return (
    <div className="nav-item relative">
      <Link
        href={href}
        aria-current={active ? "page" : undefined}
        aria-haspopup="true"
        className={`tile-cut-sm inline-flex min-h-[44px] items-center gap-1.5 px-3 py-2 text-[0.95rem] font-semibold transition-colors ${
          active ? "bg-forest text-cream" : "text-charcoal hover:bg-sage hover:text-forest"
        }`}
      >
        {label}
        <svg
          className="nav-chevron h-3.5 w-3.5 opacity-70 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      <div
        className={`nav-panel absolute top-full z-[70] pt-3 ${position} ${
          columns === 2 ? "w-[min(92vw,38rem)]" : "w-[min(92vw,24rem)]"
        }`}
      >
        <div className="tile-cut overflow-hidden border border-line bg-surface shadow-[0_24px_48px_rgba(20,26,22,0.16)]">
          <div className="flex items-center justify-between gap-4 bg-forest px-5 py-3.5">
            <p className="font-display text-sm font-bold text-cream">{label}</p>
            <Link href={href} className="text-xs font-semibold text-cream/80 underline decoration-mauve underline-offset-4 hover:text-cream">
              View all
            </Link>
          </div>
          <ul
            className={`grid gap-0.5 p-2 ${columns === 2 ? "sm:grid-cols-2" : "grid-cols-1"} ${
              scrollable ? "max-h-[min(70vh,24rem)] overflow-y-auto" : ""
            }`}
          >
            {items.map((item) => {
              const current = currentPath === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current ? "page" : undefined}
                    className={`block rounded-xl px-3 py-2.5 focus:outline-none ${
                      current ? "bg-sage" : "hover:bg-paper focus:bg-paper"
                    }`}
                  >
                    <span className={`block text-sm font-semibold ${current ? "text-forest" : "text-charcoal"}`}>
                      {current && <span aria-hidden className="mr-1.5 inline-block h-1.5 w-1.5 -translate-y-0.5 rounded-full bg-mauve" />}
                      {item.label}
                    </span>
                    {item.blurb && <span className="mt-0.5 block text-xs leading-snug text-slate">{item.blurb}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
