import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";
import { glossaryAnchorId } from "@/lib/glossary";

export const metadata = createMetadata({
  title: "Expert Witness Glossary",
  description:
    "Glossary of immigration expert witness terms: CPR Part 35, Practice Direction, Country Guidance, CPIN, and tribunal procedure.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.glossary}
        title="Immigration Expert Witness Glossary"
        subtitle="Key terms for immigration tribunal expert witness evidence."
        breadcrumbs={crumbs}
      >
        <dl className="space-y-6">
          {glossaryTerms.map((item) => (
            <div
              key={item.term}
              id={glossaryAnchorId(item)}
              className="scroll-mt-24 rounded-[8px] border border-[#e3ddd2] bg-white p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-[#141a16]">{item.term}</dt>
              <dd className="mt-2 text-[#474843] leading-relaxed">
                {item.definition}
                {item.link && (
                  <>
                    {" "}
                    <Link href={item.link} className="text-[#725865] hover:underline">
                      Learn more →
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      </PageShell>
    </>
  );
}
