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
        {page.content.map((p, i) => (
          <p key={i} className="mb-4 text-[#374151] leading-relaxed">
            {p}
          </p>
        ))}

        {relatedLinks.length > 0 && (
          <>
            <h2 className="mt-8 text-xl font-bold text-[#1A2744]">Related Resources</h2>
            <ul className="mt-4 space-y-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1A6B78] hover:underline"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-[#1A6B78] hover:underline">
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
            className="scroll-mt-24 mt-12 rounded-[8px] border border-[#C5D0DC] bg-[#F3F6F9] p-5 sm:p-8"
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
          <Link href="/witness-types" className="font-semibold text-[#B8943E] hover:underline">
            ← Back to Witness Types
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-[44px] items-center justify-center rounded-[4px] bg-[#B8943E] px-5 py-2 text-sm font-semibold text-white hover:bg-[#a68335] sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </PageShell>
    </>
  );
}
