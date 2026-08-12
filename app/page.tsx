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

      {/* Full-bleed hero — brand first */}
      <section className="relative min-h-[min(92vh,52rem)] overflow-hidden bg-ink text-chalk">
        <Image
          src="/images/hero-hearing-chamber.png"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="hero-veil absolute inset-0" aria-hidden />
        <div className="relative mx-auto flex min-h-[min(92vh,52rem)] max-w-7xl flex-col justify-end px-4 pb-14 pt-28 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
          <p className="animate-rise font-display text-4xl leading-none tracking-tight text-chalk min-[375px]:text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Immigration Expert Witnesses
          </p>
          <div className="animate-rule mt-5 h-px w-24 bg-oxblood sm:w-32" aria-hidden />
          <h1 className="animate-rise-delay mt-6 max-w-2xl font-display text-xl font-medium leading-snug text-chalk/95 sm:text-2xl md:text-3xl">
            Independent tribunal evidence for solicitors — matched, instructed, ready for hearing.
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-xl text-sm leading-relaxed text-chalk/75 sm:text-base">
            The network hub for country, persecution, human rights, and oral-evidence witnesses in asylum and
            immigration proceedings — CPR Part 35 duty, Legal Aid compatible.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[48px] items-center justify-center bg-oxblood px-7 text-sm font-semibold tracking-wide text-chalk transition-colors hover:bg-oxblood-deep"
            >
              Instruct a witness
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[48px] items-center justify-center border border-chalk/40 px-7 text-sm font-semibold tracking-wide text-chalk transition-colors hover:border-chalk hover:bg-chalk/10"
            >
              Instruction guide
            </Link>
          </div>
        </div>
      </section>

      {/* Asymmetric reading layout */}
      <section className="border-b border-rule bg-chalk/60 py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">On this page</p>
            <nav className="mt-4 space-y-2 text-sm" aria-label="Section index">
              {[
                { href: "#why-it-matters", label: "Why it matters" },
                { href: "#instruction-spine", label: "How instruction works" },
                { href: "#witness-index", label: "Witness disciplines" },
                { href: "#case-pathways", label: "Case pathways" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block border-l-2 border-transparent py-1 pl-3 text-body transition-colors hover:border-oxblood hover:text-ink"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0" id="why-it-matters">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-oxblood">For immigration solicitors</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Tribunals weigh independence, not advocacy dressed as expertise.
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-body sm:text-[1.05rem]">
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
                  className="font-medium text-moss underline decoration-rule underline-offset-4 hover:text-oxblood"
                >
                  immigrationexpertreports.com
                </a>
                . We are not a law firm and do not give legal advice — we route qualified independent witnesses.
              </p>
            </div>

            <dl className="mt-12 grid gap-8 border-t border-rule pt-10 sm:grid-cols-3">
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
                <div key={item.dt}>
                  <dt className="font-display text-lg text-ink">{item.dt}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-body">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Instruction spine */}
      <section id="instruction-spine" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Instruction spine</p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
              Four decisions that determine whether expert evidence holds.
            </h2>
          </div>

          <ol className="spine-line relative mt-12 max-w-3xl space-y-0 pl-8 sm:pl-10">
            {INSTRUCTION_SPINE.map((step, i) => (
              <li key={step.title} className="relative pb-10 last:pb-0">
                <span
                  className="absolute -left-8 top-0 flex h-6 w-6 items-center justify-center bg-ink font-display text-[11px] text-chalk sm:-left-10"
                  aria-hidden
                >
                  {i + 1}
                </span>
                <h3 className="font-display text-xl text-ink sm:text-2xl">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-body sm:text-base">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/expert-witness-framework" className="font-semibold text-moss hover:text-oxblood">
              Expert witness framework →
            </Link>
            <Link href="/oral-evidence" className="font-semibold text-moss hover:text-oxblood">
              Oral evidence guide →
            </Link>
            <Link href="/fees" className="font-semibold text-moss hover:text-oxblood">
              Fees & Legal Aid →
            </Link>
          </div>
        </div>
      </section>

      {/* Image break + folio */}
      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[18rem] bg-ink sm:min-h-[22rem] lg:min-h-[28rem]">
          <Image
            src="/images/folio-casework.png"
            alt="Annotated case materials prepared for tribunal instruction"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="flex flex-col justify-center bg-ink px-6 py-12 text-chalk sm:px-10 lg:px-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">What high-value instruction looks like</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight sm:text-4xl">
            Assumed facts. Precise questions. Exchange dates.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-chalk/75 sm:text-base">
            Weak letters of instruction produce reports that read as advocacy. Strong ones define the factual
            matrix, ask tribunal-facing questions, and leave enough research time before exchange — especially on
            Legal Aid matters requiring prior authority.
          </p>
          <Link
            href="/how-to-instruct"
            className="mt-8 inline-flex min-h-[44px] w-fit items-center border-b border-oxblood pb-1 text-sm font-semibold text-chalk hover:text-oxblood"
          >
            Read the instruct guide
          </Link>
        </div>
      </section>

      {/* Witness index — interactive rows, not card grid */}
      <section id="witness-index" className="border-b border-rule bg-chalk/50 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Witness index</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                Disciplines the tribunal can test.
              </h2>
            </div>
            <Link href="/witness-types" className="text-sm font-semibold text-moss hover:text-oxblood">
              Full witness directory →
            </Link>
          </div>

          <ul className="mt-10 border-t border-rule">
            {featuredWitnesses.map((w, i) => (
              <li key={w.slug}>
                <Link href={`/witness-types/${w.slug}`} className="index-row group flex gap-4 py-5 sm:gap-8 sm:py-6">
                  <span className="w-8 shrink-0 font-display text-sm text-brass tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl text-ink group-hover:text-oxblood sm:text-2xl">
                      {w.title}
                    </span>
                    <span className="mt-1 block max-w-2xl text-sm leading-relaxed text-body">
                      {w.metaDescription.slice(0, 140)}…
                    </span>
                  </span>
                  <span className="hidden shrink-0 self-center text-oxblood sm:inline" aria-hidden>
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case pathways */}
      <section id="case-pathways" className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brass">Case pathways</p>
              <h2 className="mt-3 font-display text-3xl tracking-tight text-ink sm:text-4xl">
                From fresh claim to Upper Tribunal.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-body sm:text-base">
                Different proceedings demand different witness combinations. Use the case-type pages to see which
                disciplines typically pair with asylum appeals, deportation, country guidance challenges, and oral
                evidence listings.
              </p>
              <div className="relative mt-8 aspect-[16/10] overflow-hidden bg-ink">
                <Image
                  src="/images/corridor-waiting.png"
                  alt="Quiet civic corridor before a hearing"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            <ul className="border-t border-rule">
              {caseTypes.slice(0, 6).map((c, i) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="index-row flex items-baseline justify-between gap-4 py-4 text-ink hover:text-oxblood"
                  >
                    <span className="font-display text-lg sm:text-xl">{c.title}</span>
                    <span className="shrink-0 font-display text-xs text-brass tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href="/case-types" className="mt-8 inline-flex text-sm font-semibold text-moss hover:text-oxblood">
            All case types →
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
