import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <ul className="border-t border-rule">
      {items.map((item, i) => (
        <li key={item.href}>
          <Link href={item.href} className="index-row group flex gap-4 py-5 sm:gap-6 sm:py-6">
            <span className="w-8 shrink-0 font-display text-sm text-brass tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0 flex-1">
              <span className="block font-display text-lg text-ink group-hover:text-oxblood sm:text-xl">
                {item.title}
              </span>
              <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-body">{item.description}</span>
            </span>
            <span className="hidden shrink-0 self-center text-oxblood sm:inline" aria-hidden>
              →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
