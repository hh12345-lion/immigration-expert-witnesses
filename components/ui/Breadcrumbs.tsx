import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mt-7 text-sm text-slate">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-2">
            {i > 0 && (
              <svg aria-hidden viewBox="0 0 8 12" className="h-2.5 w-2 shrink-0 text-stone">
                <path d="M1.5 1 L6.5 6 L1.5 11" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            )}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-[44px] max-w-full items-center break-words py-1 hover:text-forest hover:underline">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="break-words font-semibold text-mauve">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
