import Image from "next/image";
import Link from "next/link";
import { Road } from "@/components/brand/Brand";
import { photoFor } from "@/lib/page-photos";

/** Cards with a photograph in the monogram tile, chosen from the slug at the end of each link. */
export function CardGrid({ items }: { items: { title: string; description: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const p = photoFor(item.href.split("/").filter(Boolean).pop() ?? item.title);
        return (
          <Link key={item.href} href={item.href} className="group block min-h-[44px] min-w-0 break-words">
            <div className="tile-cut-sm relative aspect-[16/10] overflow-hidden bg-forest">
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 360px"
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <Road surface="#FFFDF9" width={9} />
            </div>
            <h3 className="font-display mt-5 text-xl font-bold text-forest group-hover:text-mauve">{item.title}</h3>
            <p className="mt-2 leading-relaxed text-body">{item.description}</p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-mauve">
              Read more
              <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4 transition-transform group-hover:translate-x-1">
                <path d="M0 5 H14 M10 1 L14 5 L10 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </span>
          </Link>
        );
      })}
    </div>
  );
}
