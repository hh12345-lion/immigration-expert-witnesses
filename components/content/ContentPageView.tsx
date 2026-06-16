import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import type { ContentPage } from "@/data/content-types";
import type { Crumb } from "@/components/ui/Breadcrumbs";

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

        {page.faqs.length > 0 && <FAQSection faqs={page.faqs} />}

        <div className="mt-10">
          <Link href={hubHref} className="font-semibold text-[#B8943E] hover:underline">
            ← Back to {hubLabel}
          </Link>
        </div>
      </PageShell>
    </>
  );
}
