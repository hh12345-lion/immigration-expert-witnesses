import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { guides } from "@/data/guides";
import { excerpt } from "@/lib/excerpt";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Guides",
  description:
    "Solicitor guides for instructing immigration expert witnesses, CPR Part 35, oral evidence, Legal Aid, and witness selection.",
  path: "/guides",
});

export default function GuidesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Guides" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.guides}
        title="Immigration Expert Witness Guides"
        subtitle="Practical guides for immigration solicitors instructing expert witnesses."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={guides.map((g) => ({
            title: g.title,
            description: excerpt(g.content),
            href: `/guides/${g.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#725865] hover:underline">
            Network directory
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#725865] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#725865] hover:underline">
            How to instruct an expert witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
