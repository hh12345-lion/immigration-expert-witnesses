import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ContentAside } from "@/components/content/ContentAside";
import { RelatedLinks } from "@/components/content/ContentPageView";
import { fallbackPhoto, photoFor } from "@/lib/page-photos";
import type { ContentPage } from "@/data/content-types";
import type { Crumb } from "@/components/ui/Breadcrumbs";

/**
 * Witness-type detail layout with a dedicated full-width FAQ section
 * containing all FAQs for this witness discipline.
 */
export function WitnessTypePageView({
  page,
  breadcrumbs,
}: {
  page: ContentPage;
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
          </div>
          <ContentAside
            photo={second.src === photo.src ? fallbackPhoto(page.slug + "-alt") : second}
            hubLabel="Witness types"
            hubHref="/witness-types"
          />
        </div>

        {page.faqs.length > 0 && (
          <section
            id="witness-type-faqs"
            className="tile-cut mt-14 scroll-mt-24 bg-paper p-5 sm:p-10"
            aria-labelledby="witness-type-faqs-heading"
          >
            <FAQSection faqs={page.faqs} title={`${page.title}: frequently asked questions`} id="witness-type-faqs-heading" />
          </section>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href="/witness-types" className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-forest hover:text-mauve">
            <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4">
              <path d="M16 5 H2 M6 1 L2 5 L6 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
            Back to witness types
          </Link>
          <Link
            href="/contact"
            className="tile-cut-sm inline-flex min-h-[46px] items-center justify-center bg-mauve px-6 py-2 text-sm font-bold text-cream hover:bg-oxblood-deep sm:w-auto"
          >
            Request a witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
