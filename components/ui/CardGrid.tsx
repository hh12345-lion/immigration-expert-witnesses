import Link from "next/link";

export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className="tile-card group flex h-full flex-col p-6">
            <span className="font-display text-lg font-semibold text-ink group-hover:text-sky sm:text-xl">
              {item.title}
            </span>
            <span className="mt-2 text-sm leading-relaxed text-body">{item.description}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
