import Link from "next/link";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-xs text-white/60 sm:text-sm">
      <ol className="flex flex-wrap items-center gap-x-1 gap-y-0.5">
        {items.map((item, i) => (
          <li key={i} className="flex max-w-full items-center gap-1">
            {i > 0 && <span aria-hidden="true" className="shrink-0">/</span>}
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-[44px] max-w-full items-center break-words py-1 hover:text-white/90">
                {item.label}
              </Link>
            ) : (
              <span className="break-words text-white/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
