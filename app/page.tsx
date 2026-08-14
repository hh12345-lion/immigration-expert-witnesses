import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { witnessTypes } from "@/data/witness-types";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title:
    "Immigration Expert Witness | Country & Asylum Experts for Immigration Tribunals",
  description:
    "Find qualified immigration expert witnesses for tribunal proceedings. Country condition witnesses, persecution analysis, human rights experts, linguistic identity, and oral evidence at FTT and Upper Tribunal. CPR Part 35 compliant. Legal Aid compatible.",
  path: "/",
});

const TOP_WITNESS_SLUGS = [
  "country-condition-expert-witness",
  "persecution-expert-witness",
  "human-rights-expert-witness",
  "oral-evidence-witness",
] as const;

const INSTRUCTION_SPINE = [
  {
    title: "Match the witness discipline",
    body: "Country condition, persecution, human rights, linguistic identity, internal relocation, CPIN challenge, medical coordination, or oral evidence — instruct the discipline the tribunal question actually requires.",
  },
  {
    title: "Letter of instruction that survives scrutiny",
    body: "State assumed facts, the precise questions for the expert, material already disclosed, and hearing or exchange deadlines. Ambiguous instructions produce reports tribunals discount.",
  },
  {
    title: "Independence on the face of the report",
    body: "CPR Part 35 and Ikarian Reefer principles require a paramount duty to the tribunal. Experts must separate assumed facts from opinion and declare conflicts.",
  },
  {
    title: "Oral evidence when the case turns on it",
    body: "Where credibility, country guidance application, or CPIN challenge will be tested live, instruct a witness able to attend FTT or Upper Tribunal and hold under cross-examination.",
  },
];

export default function HomePage() {
  const featuredWitnesses = witnessTypes.filter((w) =>
    TOP_WITNESS_SLUGS.includes(w.slug as (typeof TOP_WITNESS_SLUGS)[number])
  );

  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      <section className="border-b border-line bg-surface">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:px-8 lg:py-20">
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-sky/10 px-3 py-1 text-xs font-semibold text-sky">
              Tribunal evidence network
            </p>
            <p className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-ink min-[375px]:text-5xl sm:text-6xl">
              Immigration Expert Witnesses
            </p>
            <h1 className="mt-5 max-w-xl text-lg leading-snug text-body sm:text-xl">
              Independent tribunal evidence for solicitors — matched, instructed, ready for hearing.
            </h1>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate sm:text-base">
              The network hub for country, persecution, human rights, and oral-evidence witnesses in asylum and
              immigration proceedings — CPR Part 35 duty, Legal Aid compatible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-sky px-7 text-sm font-semibold text-white hover:bg-sky-deep"
              >
                Request a witness
              </Link>
              <Link
                href="/how-to-instruct"
                className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-line bg-surface px-7 text-sm font-semibold text-ink hover:border-sky hover:text-sky"
              >
                Instruction guide
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-ink shadow-[0_24px_48px_rgba(24,24,27,0.12)] lg:aspect-[5/4]">
            <Image
              src="/images/hero-hearing-chamber.png"
              alt=""
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>

      <nav
        className="border-b border-line bg-paper"
        aria-label="On this page"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-4 py-3 sm:px-6 lg:px-8">
          {[
            { href: "#why-it-matters", label: "Why it matters" },
            { href: "#instruction-spine", label: "How instruction works" },
            { href: "#witness-index", label: "Witness disciplines" },
            { href: "#case-pathways", label: "Case pathways" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex min-h-[40px] items-center rounded-full border border-line bg-surface px-3.5 text-sm text-body hover:border-sky hover:text-sky"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="why-it-matters" className="scroll-mt-28 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">For immigration solicitors</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Tribunals weigh independence, not advocacy dressed as expertise.
          </h2>
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-body">
            <p>
              Immigration and asylum tribunals expect expert witnesses whose paramount duty is to the tribunal —
              not the instructing party. That duty is set by CPR Part 35, Ikarian Reefer independence principles,
              and the Immigration Tribunal Practice Direction on expert evidence (2024), with practical report
              standards reflected in the Adam Pipe October 2025 expert report guide.
            </p>
            <p>
              Generic Home Office CPINs rarely answer the appellant-specific question: risk for this profile, in
              this region, under current conditions. Country condition witnesses, persecution analysts, and human
              rights experts exist to close that gap with dated sources, field knowledge, and methodology the
              Upper Tribunal can test.
            </p>
            <p>
              This site is the witness network hub. Report-type standards and CPIN frameworks sit at our sister
              hub,{" "}
              <a
                href={SISTER_HUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-sky underline decoration-line underline-offset-4 hover:text-sky-deep"
              >
                immigrationexpertreports.com
              </a>
              . We are not a law firm and do not give legal advice — we route qualified independent witnesses.
            </p>
          </div>

          <dl className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                dt: "Practice Direction 2024",
                dd: "Expert evidence duties, disclosure, and oral evidence expectations for FTT and UT.",
              },
              {
                dt: "Legal Aid pathway",
                dd: "LAA prior authority support, rate expectations, and early instruction timing.",
              },
              {
                dt: "Network depth",
                dd: "Country and thematic sites across Somalia, Nigeria, Pakistan, Afghanistan, and more.",
              },
            ].map((item) => (
              <div key={item.dt} className="tile-card p-6">
                <dt className="font-display text-lg font-semibold text-ink">{item.dt}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-body">{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="instruction-spine" className="scroll-mt-28 border-y border-line bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">Instruction</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Four decisions that determine whether expert evidence holds.
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {INSTRUCTION_SPINE.map((step, i) => (
              <li key={step.title} className="tile-card p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-sky text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{step.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/expert-witness-framework" className="font-semibold text-sky hover:text-sky-deep">
              Expert witness framework →
            </Link>
            <Link href="/oral-evidence" className="font-semibold text-sky hover:text-sky-deep">
              Oral evidence guide →
            </Link>
            <Link href="/fees" className="font-semibold text-sky hover:text-sky-deep">
              Fees & Legal Aid →
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative order-2 aspect-[16/10] overflow-hidden rounded-2xl bg-ink lg:order-1">
            <Image
              src="/images/folio-casework.png"
              alt="Annotated case materials prepared for tribunal instruction"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">High-value instruction</p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Assumed facts. Precise questions. Exchange dates.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-body sm:text-base">
              Weak letters of instruction produce reports that read as advocacy. Strong ones define the factual
              matrix, ask tribunal-facing questions, and leave enough research time before exchange — especially on
              Legal Aid matters requiring prior authority.
            </p>
            <Link
              href="/how-to-instruct"
              className="mt-6 inline-flex min-h-[44px] items-center font-semibold text-sky hover:text-sky-deep"
            >
              Read the instruct guide →
            </Link>
          </div>
        </div>
      </section>

      <section id="witness-index" className="scroll-mt-28 border-t border-line bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">Witness disciplines</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Disciplines the tribunal can test.
              </h2>
            </div>
            <Link href="/witness-types" className="text-sm font-semibold text-sky hover:text-sky-deep">
              Full witness directory →
            </Link>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {featuredWitnesses.map((w) => (
              <li key={w.slug}>
                <Link href={`/witness-types/${w.slug}`} className="tile-card group flex h-full flex-col p-6">
                  <span className="font-display text-xl font-semibold text-ink group-hover:text-sky">{w.title}</span>
                  <span className="mt-2 text-sm leading-relaxed text-body">
                    {w.metaDescription.slice(0, 140)}…
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="case-pathways" className="scroll-mt-28 border-t border-line bg-paper py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky">Case pathways</p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                From fresh claim to Upper Tribunal.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-body sm:text-base">
                Different proceedings demand different witness combinations. Use the case-type pages to see which
                disciplines typically pair with asylum appeals, deportation, country guidance challenges, and oral
                evidence listings.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {caseTypes.slice(0, 6).map((c) => (
                  <li key={c.slug}>
                    <Link
                      href={`/case-types/${c.slug}`}
                      className="tile-card flex min-h-[56px] items-center px-4 py-3 font-display text-base font-semibold text-ink hover:text-sky"
                    >
                      {c.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/case-types" className="mt-6 inline-flex text-sm font-semibold text-sky hover:text-sky-deep">
                All case types →
              </Link>
            </div>
            <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-ink">
              <Image
                src="/images/corridor-waiting.png"
                alt="Quiet civic corridor before a hearing"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
