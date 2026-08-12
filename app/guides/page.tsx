import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Guides | Solicitor Resources",
  description:
    "Solicitor guides for instructing immigration expert witnesses — CPR Part 35, oral evidence, Legal Aid, witness selection, and witness vs report differentiation.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Guides"
        subtitle="Practical guides for immigration solicitors instructing expert witnesses."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: g.metaDescription,
            href: `/guides/${g.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#3a5244] hover:underline">
            Network directory
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#6e2433] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#6e2433] hover:underline">
            How to instruct an expert witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
