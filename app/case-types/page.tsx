import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { caseTypes } from "@/data/case-types";
import { excerpt } from "@/lib/excerpt";

export const metadata = createMetadata({
  title: "Immigration Case Types & Expert Witnesses",
  description:
    "Expert witnesses for FTT asylum appeals, Upper Tribunal, deportation, fresh claims, human rights, and judicial review.",
  path: "/case-types",
});

export default function CaseTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Case Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.caseTypes}
        title="Immigration Case Types & Expert Witnesses"
        subtitle="Which expert witnesses are needed for each type of immigration proceeding."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={caseTypes.map((c) => ({
            title: c.title,
            description: excerpt(c.content),
            href: `/case-types/${c.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#725865] hover:underline">
            Network directory
          </Link>
          <Link href="/witness-types" className="font-semibold text-[#725865] hover:underline">
            Witness types
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#725865] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#725865] hover:underline">
            How to instruct
          </Link>
        </div>
      </PageShell>
    </>
  );
}
