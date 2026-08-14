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
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tile-card flex min-h-[44px] items-center px-4 py-3 text-sky hover:text-sky-deep"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="tile-card flex min-h-[44px] items-center px-4 py-3 text-sky hover:text-sky-deep"
                    >
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
          <Link href={hubHref} className="font-semibold text-sky hover:underline">
            ← Back to {hubLabel}
          </Link>
        </div>
      </PageShell>
    </>
  );
}
