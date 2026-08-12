import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
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

  return (
    <>
      <PageJsonLd breadcrumbs={breadcrumbs} faqs={page.faqs.length ? page.faqs : undefined} />
      <PageShell title={page.h1} breadcrumbs={breadcrumbs}>
        <div className="max-w-3xl">
          {page.content.map((p, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-body sm:text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>

        {relatedLinks.length > 0 && (
          <>
            <h2 className="mt-10 font-display text-2xl tracking-tight text-ink">Related resources</h2>
            <ul className="mt-4 divide-y divide-rule border-y border-rule">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="index-row flex min-h-[44px] items-center py-3 text-moss hover:text-oxblood"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="index-row flex min-h-[44px] items-center py-3 text-moss hover:text-oxblood"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}

        {page.faqs.length > 0 && (
          <section
            id="witness-type-faqs"
            className="scroll-mt-24 mt-12 border border-rule bg-paper/80 p-5 sm:p-8"
            aria-labelledby="witness-type-faqs-heading"
          >
            <FAQSection
              faqs={page.faqs}
              title={`${page.title} — Frequently Asked Questions`}
              id="witness-type-faqs-heading"
            />
          </section>
        )}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <Link href="/witness-types" className="font-semibold text-oxblood hover:underline">
            ← Back to Witness Types
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center bg-oxblood px-5 py-2 text-sm font-semibold text-chalk hover:bg-oxblood-deep sm:w-auto"
          >
            Instruct
          </Link>
        </div>
      </PageShell>
    </>
  );
}
