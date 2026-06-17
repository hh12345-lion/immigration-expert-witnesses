import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { glossaryTerms } from "@/data/glossary";
import { glossaryAnchorId } from "@/lib/glossary";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Glossary | Tribunal Terms",
  description:
    "Glossary of immigration expert witness terms — CPR Part 35, Ikarian Reefer, Practice Direction 2024, Country Guidance, CPIN, oral evidence, and tribunal procedures.",
  path: "/glossary",
});

export default function GlossaryPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Glossary" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Glossary"
        subtitle="Key terms for immigration tribunal expert witness evidence."
        breadcrumbs={crumbs}
      >
        <dl className="space-y-6">
          {glossaryTerms.map((item) => (
            <div
              key={item.term}
              id={glossaryAnchorId(item)}
              className="scroll-mt-24 rounded-[8px] border border-[#C5D0DC] bg-white p-6 shadow-sm"
            >
              <dt className="text-lg font-semibold text-[#1A2744]">{item.term}</dt>
              <dd className="mt-2 text-[#374151] leading-relaxed">
                {item.definition}
                {item.link && (
                  <>
                    {" "}
                    <Link href={item.link} className="text-[#1A6B78] hover:underline">
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
