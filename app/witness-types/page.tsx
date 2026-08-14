import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { witnessTypes } from "@/data/witness-types";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Types | Country, Persecution & Human Rights",
  description:
    "Eight immigration expert witness disciplines for tribunals — country condition, persecution analysis, human rights, linguistic identity, internal relocation, CPIN challenge, medical coordination, and oral evidence.",
  path: "/witness-types",
});

const witnessComparison = [
  {
    discipline: "Country condition",
    focus: "Security, human rights, state protection, profile-specific risks",
    typicalCase: "FTT asylum appeal, CPIN challenge",
    href: "/witness-types/country-condition-expert-witness",
  },
  {
    discipline: "Persecution analysis",
    focus: "Refugee Convention nexus, HJ/RT methodology, state protection",
    typicalCase: "Asylum appeal, Convention grounds",
    href: "/witness-types/persecution-expert-witness",
  },
  {
    discipline: "Human rights",
    focus: "ECHR Articles 3 & 8, treaty standards, return risk",
    typicalCase: "Deportation, removal, humanitarian protection",
    href: "/witness-types/human-rights-expert-witness",
  },
  {
    discipline: "Linguistic identity",
    focus: "Dialect, clan, cultural knowledge, nationality claims",
    typicalCase: "Credibility, clan-based asylum jurisdictions",
    href: "/witness-types/linguistic-identity-expert-witness",
  },
  {
    discipline: "Internal relocation",
    focus: "Viability of relocation within country of origin",
    typicalCase: "Upper Tribunal, internal flight alternative",
    href: "/witness-types/internal-relocation-expert-witness",
  },
  {
    discipline: "CPIN challenge",
    focus: "Dated primary sources challenging Home Office CPINs",
    typicalCase: "Country guidance, UT appeals",
    href: "/witness-types/cpin-challenge-expert-witness",
  },
  {
    discipline: "Medical / psychiatric",
    focus: "Torture documentation, PTSD, mental health on return",
    typicalCase: "Article 3, fresh claims, complex harm",
    href: "/witness-types/medical-psychiatric-expert-witness",
  },
  {
    discipline: "Oral evidence",
    focus: "Tribunal appearance, cross-examination, joint meetings",
    typicalCase: "Disputed expert methodology at FTT/UT",
    href: "/witness-types/oral-evidence-witness",
  },
];

const witnessHubFaqs = [
  {
    question: "How many immigration expert witness disciplines are there?",
    answer:
      "Our witness taxonomy covers eight disciplines: country condition, persecution, human rights, linguistic identity, internal relocation, CPIN challenge, medical/psychiatric, and oral evidence — each with distinct tribunal methodology.",
  },
  {
    question: "What is the difference between a country condition and persecution witness?",
    answer:
      "Country condition witnesses assess conditions on the ground. Persecution witnesses apply Refugee Convention methodology — nexus, well-founded fear, and Convention grounds. Many asylum appeals require both disciplines.",
  },
  {
    question: "When do I need an oral evidence witness?",
    answer:
      "When the tribunal may direct cross-examination of expert evidence, or where methodology and findings are disputed. Instruct witnesses prepared for FTT or UT oral attendance from the outset.",
  },
];

export default function WitnessTypesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Witness Types" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={witnessHubFaqs} />
      <PageShell
        title="Immigration Expert Witness Types"
        subtitle="Eight witness disciplines for asylum appeals, deportation, country guidance challenges, and Upper Tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#3f4654] leading-relaxed">
          An immigration expert witness provides independent tribunal evidence within a defined discipline — country
          conditions, persecution methodology, human rights standards, linguistic identity, or oral testimony. Use the
          comparison matrix below to select the right witness discipline for your case type.
        </p>

        <h2 className="text-lg font-bold text-[#18181b]">Witness Discipline Comparison Matrix</h2>
        <div className="table-scroll mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm text-[#3f4654]">
              Immigration expert witness discipline comparison for tribunal proceedings
            </caption>
            <thead>
              <tr className="border-b border-[#e2e8f0] bg-[#f4f6f8]">
                <th className="p-3 font-semibold text-[#18181b]">Discipline</th>
                <th className="p-3 font-semibold text-[#18181b]">Primary focus</th>
                <th className="p-3 font-semibold text-[#18181b]">Typical case type</th>
                <th className="p-3 font-semibold text-[#18181b]">Detail page</th>
              </tr>
            </thead>
            <tbody>
              {witnessComparison.map((row) => (
                <tr key={row.discipline} className="border-b border-[#e2e8f0]">
                  <td className="p-3 font-medium text-[#18181b]">{row.discipline}</td>
                  <td className="p-3 text-[#3f4654]">{row.focus}</td>
                  <td className="p-3 text-[#3f4654]">{row.typicalCase}</td>
                  <td className="p-3">
                    <Link href={row.href} className="text-[#0284c7] hover:underline">
                      View discipline →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-10">
          <CardGrid
            items={witnessTypes.map((w) => ({
              title: w.title,
              description: w.metaDescription,
              href: `/witness-types/${w.slug}`,
            }))}
          />
        </div>

        <FAQSection faqs={witnessHubFaqs} title="Witness Types — FAQs" />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#0284c7] hover:underline">
            Network directory
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#0284c7] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/qualifications" className="font-semibold text-[#0284c7] hover:underline">
            Qualifications
          </Link>
        </div>
      </PageShell>
    </>
  );
}
