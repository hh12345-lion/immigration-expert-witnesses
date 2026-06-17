import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";

export const metadata = createMetadata({
  title: "Immigration Case Types & Expert Witnesses | Tribunal Guide",
  description:
    "Expert witnesses for FTT asylum appeals, Upper Tribunal, deportation, fresh claims, human rights, country guidance challenges, judicial review, and administrative review.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Case Types & Expert Witnesses"
        subtitle="Which expert witnesses are needed for each type of immigration proceeding."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: c.metaDescription,
            href: `/case-types/${c.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#1A6B78] hover:underline">
            Network directory
          </Link>
          <Link href="/witness-types" className="font-semibold text-[#1A6B78] hover:underline">
            Witness types
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#B8943E] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#B8943E] hover:underline">
            How to instruct
          </Link>
        </div>
      </PageShell>
    </>
  );
}
