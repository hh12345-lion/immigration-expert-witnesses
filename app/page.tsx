import Link from "next/link";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { witnessTypes } from "@/data/witness-types";
import { services } from "@/data/services";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title:
    "Immigration Expert Witness UK | Country & Asylum Experts for Immigration Tribunals",
  description:
    "Find qualified immigration expert witnesses in the UK. Country condition witnesses, persecution analysis, human rights experts, linguistic identity, and oral evidence at FTT and Upper Tribunal. CPR Part 35 compliant. Legal Aid compatible.",
  path: "/",
});

const TOP_WITNESS_SLUGS = [
  "country-condition-expert-witness",
  "persecution-expert-witness",
  "human-rights-expert-witness",
  "oral-evidence-witness",
] as const;

export default function HomePage() {
  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />
      <section className="bg-[#1A2744] py-14 md:py-20">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-[#B8943E] sm:text-sm">
            UK Immigration & Asylum Tribunals
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-2xl font-bold text-white min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Immigration Expert Witness UK: Tribunal Evidence for Solicitors
          </h1>
          <p className="mt-6 max-w-2xl text-base text-white/80 sm:text-lg">
            The network master hub for immigration expert witnesses. We connect UK immigration solicitors,
            law firms, and Legal Aid practitioners with qualified expert witnesses for asylum appeals, deportation
            proceedings, country guidance challenges, and Upper Tribunal cases — with CPR Part 35 independence and
            oral evidence capability.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#B8943E] px-6 py-3 font-semibold text-white hover:bg-[#a68335] sm:w-auto sm:px-8"
            >
              Instruct an Expert Witness
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] border-2 border-white px-6 py-3 text-center font-semibold text-white hover:bg-white/10 sm:w-auto sm:px-8"
            >
              How to Instruct
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2744] sm:text-2xl md:text-3xl">
            Why Immigration Expert Witnesses Matter
          </h2>
          <p className="mt-4 max-w-3xl text-[#374151] leading-relaxed">
            UK immigration tribunals rely on independent expert witnesses whose paramount duty is to the tribunal —
            not the instructing party. Expert witness evidence is governed by CPR Part 35, Ikarian Reefer independence
            principles, and the Immigration Tribunal Practice Direction on expert evidence (2024), with additional
            guidance from the Adam Pipe October 2025 expert report guide.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "CPR Part 35 & Tribunal Duties",
                desc: "Practice Direction 2024, Adam Pipe 2025, Ikarian Reefer independence, and oral evidence at FTT and UT hearings — the witness framework solicitors need.",
              },
              {
                title: "Network of Specialist Witnesses",
                desc: "Country-specific and thematic expert witnesses across Somalia, Nigeria, Pakistan, Afghanistan, persecution, and human rights network sites.",
              },
              {
                title: "Legal Aid Compatible",
                desc: "LAA prior authority guidance, rate expectations, and early instruction support for legally aided FTT and Upper Tribunal proceedings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[8px] border border-[#C5D0DC] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
              >
                <h3 className="font-semibold text-[#1A2744]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#374151]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2744] sm:text-2xl">Witness Types</h2>
          <p className="mt-2 max-w-3xl text-[#374151]">
            Eight witness disciplines across our network — from country condition to oral evidence at tribunal.
          </p>
          <div className="mt-8">
            <CardGrid
              items={witnessTypes
                .filter((w) => TOP_WITNESS_SLUGS.includes(w.slug as (typeof TOP_WITNESS_SLUGS)[number]))
                .map((w) => ({
                  title: w.title,
                  description: w.metaDescription.slice(0, 120) + "...",
                  href: `/witness-types/${w.slug}`,
                }))}
            />
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/witness-types" className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
              View all witness types
            </Link>
            <Link href="/expert-witness-framework" className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
              Expert witness framework
            </Link>
            <Link href="/oral-evidence" className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
              Oral evidence guide
            </Link>
            <Link href="/what-is-an-immigration-expert-witness" className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
              What is an expert witness?
            </Link>
            <Link href="/network" className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
              Network directory
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2744] sm:text-2xl">Expert Witness Services</h2>
          <div className="mt-8">
            <CardGrid items={services} />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto min-w-0 max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-[#1A2744] sm:text-2xl">Case Types</h2>
          <div className="mt-8">
            <CardGrid
              items={caseTypes.slice(0, 6).map((c) => ({
                title: c.title,
                description: c.metaDescription.slice(0, 100) + "...",
                href: `/case-types/${c.slug}`,
              }))}
            />
          </div>
          <Link href="/case-types" className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline">
            View all case types
          </Link>
        </div>
      </section>

      <section className="border-t border-[#C5D0DC] bg-[#F3F6F9] py-10">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <p className="text-sm text-[#374151]">
            Report standards, report types, and CPIN framework are maintained at our sister hub:{" "}
            <a
              href={SISTER_HUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A6B78] hover:underline"
            >
              immigrationexpertreports.com
            </a>
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}
