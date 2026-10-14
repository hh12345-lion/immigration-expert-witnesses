import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ContentAside } from "@/components/content/ContentAside";
import { fallbackPhoto, photoFor } from "@/lib/page-photos";
import type { ContentPage } from "@/data/content-types";
import type { Crumb } from "@/components/ui/Breadcrumbs";

export function RelatedLinks({ links }: { links: { label: string; href: string }[] }) {
  if (links.length === 0) return null;
  return (
    <>
      <h2 className="font-display mt-12 text-2xl font-bold text-forest">Related resources</h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {links.map((link) => {
          const cls =
            "tile-card group flex min-h-[52px] items-center justify-between gap-3 px-5 py-3 font-semibold text-forest hover:text-mauve";
          const arrow = (
            <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4 shrink-0 text-mauve transition-transform group-hover:translate-x-1">
              <path d="M0 5 H14 M10 1 L14 5 L10 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          );
          return (
            <li key={link.href}>
              {link.href.startsWith("http") ? (
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {link.label}
                  {arrow}
                </a>
              ) : (
                <Link href={link.href} className={cls}>
                  {link.label}
                  {arrow}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export function ContentPageView({
  page,
  hubLabel,
  hubHref,
  breadcrumbs,
}: {
  page: ContentPage;
  hubLabel: string;
  hubHref: string;
  breadcrumbs: Crumb[];
}) {
  const relatedLinks = page.relatedLinks ?? [];
  const photo = photoFor(page.slug);
  const second = fallbackPhoto(page.slug + "-aside");

  return (
    <>
      <PageJsonLd breadcrumbs={breadcrumbs} faqs={page.faqs.length ? page.faqs : undefined} />
      <PageShell title={page.h1} breadcrumbs={breadcrumbs} photo={photo}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="min-w-0">
            <div className="max-w-3xl">
              {page.content.map((p, i) => (
                <p
                  key={i}
                  className={`mb-5 leading-relaxed text-body ${
                    i === 0 ? "text-lg text-charcoal sm:text-xl" : "text-base sm:text-[1.05rem]"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>

            <RelatedLinks links={relatedLinks} />

            {page.faqs.length > 0 && <FAQSection faqs={page.faqs} />}

            <div className="mt-10">
              <Link href={hubHref} className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-forest hover:text-mauve">
                <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4">
                  <path d="M16 5 H2 M6 1 L2 5 L6 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                Back to {hubLabel}
              </Link>
            </div>
          </div>
          <ContentAside photo={second.src === photo.src ? fallbackPhoto(page.slug + "-alt") : second} hubLabel={hubLabel} hubHref={hubHref} />
        </div>
      </PageShell>
    </>
  );
}
