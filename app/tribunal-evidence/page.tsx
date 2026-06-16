import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { tribunalEvidence } from "@/data/tribunal-evidence";

export const metadata = createMetadata({
  title: "Immigration Tribunal Expert Evidence UK | Witness Guide",
  description:
    "Tribunal expert evidence guidance — instructing witnesses, exchange deadlines, oral evidence, cross-examination, joint meetings, and Legal Aid rates.",
  path: "/tribunal-evidence",
});

export default function TribunalEvidenceHubPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Tribunal Evidence" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Tribunal Expert Evidence"
        subtitle="Guidance on instructing expert witnesses, exchange deadlines, oral evidence, and tribunal compliance."
        breadcrumbs={crumbs}
      >
        <CardGrid
          items={tribunalEvidence.map((t) => ({
            title: t.title,
            description: t.metaDescription,
            href: `/tribunal-evidence/${t.slug}`,
          }))}
        />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#1A6B78] hover:underline">
            Network directory
          </Link>
          <Link href="/oral-evidence" className="font-semibold text-[#1A6B78] hover:underline">
            Oral evidence guide
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#B8943E] hover:underline">
            Expert witness framework
          </Link>
        </div>
      </PageShell>
    </>
  );
}
