import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "What Is an Immigration Expert Witness? | UK Tribunal Role & Qualifications",
  description:
    "An immigration expert witness provides independent country condition, persecution, and human rights evidence for UK immigration tribunals — with a paramount duty to the tribunal, not the instructing party.",
  path: "/what-is-an-immigration-expert-witness",
});

export default function WhatIsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "What Is an Expert Witness?" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="What Is an Immigration Expert Witness?"
        subtitle="The role, duties, and qualifications of expert witnesses in UK immigration tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          An immigration expert witness is an independent specialist who provides evidence to UK immigration tribunals
          on country conditions, persecution methodology, human rights standards, linguistic identity, or related
          matters within their expertise. Unlike advocates, expert witnesses owe a paramount duty to the tribunal — not
          the instructing party — under CPR Part 35 and the principles established in <em>Ikarian Reefer</em>.
        </p>
        <p className="mb-4 text-[#374151] leading-relaxed">
          Expert witnesses may produce written reports and give oral evidence at tribunal hearings. The witness role
          encompasses tribunal appearance, cross-examination preparedness, joint expert meetings, and ongoing
          credibility under scrutiny — capabilities beyond report production alone.
        </p>
        <p className="mb-4 text-[#374151] leading-relaxed">
          immigrationexpertwitnesses.com is the network master hub for expert witnesses. Our sister site{" "}
          <a href={SISTER_HUB_URL} target="_blank" rel="noopener noreferrer" className="text-[#1A6B78] hover:underline">
            immigrationexpertreports.com
          </a>{" "}
          maintains report standards, report types, and CPIN framework guidance.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1A2744]">Key Witness Disciplines</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#374151]">
          <li>Country condition expert witnesses — security, human rights, state protection, profile-specific risks</li>
          <li>Persecution expert witnesses — Refugee Convention grounds, nexus, HJ/RT standards</li>
          <li>Human rights expert witnesses — ECHR Article 3, ICCPR, CAT, CEDAW</li>
          <li>Linguistic and identity expert witnesses — dialect, clan, nationality claims</li>
          <li>Internal relocation expert witnesses — viability and Reasonableness test</li>
          <li>CPIN and country guidance expert witnesses — CPIN challenge, CG precedent</li>
          <li>Medical and psychiatric expert coordination — torture survivors, PTSD</li>
          <li>Oral evidence witnesses — tribunal hearing attendance and cross-examination</li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/witness-types" className="font-semibold text-[#1A6B78] hover:underline">
            All witness types
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#B8943E] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/qualifications" className="font-semibold text-[#B8943E] hover:underline">
            Qualifications
          </Link>
        </div>
      </PageShell>
    </>
  );
}
