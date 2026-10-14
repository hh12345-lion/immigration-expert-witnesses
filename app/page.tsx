import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/ui/CTASection";
import { CardGrid } from "@/components/ui/CardGrid";
import { JsonLd } from "@/components/ui/JsonLd";
import { Globe, Mark, Road, RoadPhoto } from "@/components/brand/Brand";
import { homepageGraph, websiteSchema } from "@/lib/schema";
import { witnessTypes } from "@/data/witness-types";
import { caseTypes } from "@/data/case-types";
import { createMetadata } from "@/lib/metadata";
import { SISTER_HUB_URL } from "@/lib/constants";
import { photos } from "@/lib/photos";
import { excerpt } from "@/lib/excerpt";

export const metadata = createMetadata({
  title: "Immigration Expert Witnesses | Tribunal Evidence",
  description:
    "Find qualified immigration expert witnesses for tribunal proceedings: country conditions, persecution, human rights and oral evidence. CPR Part 35.",
  path: "/",
});

const TOP_WITNESS_SLUGS = [
  "country-condition-expert-witness",
  "persecution-expert-witness",
  "human-rights-expert-witness",
  "linguistic-identity-expert-witness",
  "internal-relocation-expert-witness",
  "oral-evidence-witness",
] as const;

const INSTRUCTION_SPINE = [
  {
    title: "Match the witness discipline",
    body: "Country condition, persecution, human rights, linguistic identity, internal relocation, CPIN challenge, medical coordination or oral evidence: instruct the discipline the tribunal question actually requires.",
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
    body: "Where credibility, country guidance application or a CPIN challenge will be tested live, instruct a witness able to attend the FTT or Upper Tribunal and hold under cross-examination.",
  },
];

const FIELD = [
  { photo: photos.heratLandscape, place: "Herat province", note: "Regional security and return routes" },
  { photo: photos.kabulOldCity, place: "Kabul", note: "Profile risk in the capital" },
  { photo: photos.asmaraStreet, place: "Asmara", note: "State surveillance and exit" },
  { photo: photos.khartoumNile, place: "Khartoum", note: "Conflict and displacement" },
  { photo: photos.kurdistanVillage, place: "Kurdistan Region", note: "Relocation and documentation" },
  { photo: photos.tigrayHighlands, place: "Tigray", note: "Ethnic profile and access" },
];

export default function HomePage() {
  const featuredWitnesses = witnessTypes.filter((w) =>
    TOP_WITNESS_SLUGS.includes(w.slug as (typeof TOP_WITNESS_SLUGS)[number])
  );

  return (
    <>
      <JsonLd data={[homepageGraph(), websiteSchema()]} />

      {/* Hero: the title comes first, the photographs sit in the monogram tile. */}
      <section className="relative overflow-hidden bg-paper">
        <Globe className="pointer-events-none absolute -right-48 -top-40 hidden h-[44rem] w-[44rem] text-moss/10 lg:block" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-16 pt-10 sm:px-6 sm:pt-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="min-w-0">
            <h1 className="font-display text-[2.5rem] font-bold leading-[1.04] text-forest min-[400px]:text-5xl sm:text-6xl lg:text-[4.1rem]">
              Independent expert witnesses for immigration tribunals
            </h1>
            <svg aria-hidden viewBox="0 0 160 16" className="mt-7 h-4 w-40">
              <path d="M2 4 C 50 4, 96 14, 158 12" fill="none" stroke="#725865" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-body sm:text-xl">
              Country, persecution, human rights and oral evidence witnesses for asylum and immigration appeals,
              matched to the question the tribunal has to decide and instructed under CPR Part 35.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="tile-cut-sm inline-flex min-h-[52px] items-center justify-center bg-mauve px-8 text-sm font-bold text-cream transition-colors hover:bg-oxblood-deep"
              >
                Request a witness
              </Link>
              <Link
                href="/how-to-instruct"
                className="tile-cut-sm inline-flex min-h-[52px] items-center justify-center border border-forest/30 bg-surface px-8 text-sm font-bold text-forest transition-colors hover:bg-sage"
              >
                How to instruct
              </Link>
            </div>
            <ul className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm text-body min-[460px]:grid-cols-3">
              {["CPR Part 35 duty", "Legal Aid compatible", "FTT and Upper Tribunal"].map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Mark className="h-5 w-auto shrink-0" />
                  <span className="font-semibold text-charcoal">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <RoadPhoto
              photo={photos.fieldHouse}
              priority
              aspect="aspect-[4/5] sm:aspect-[5/5]"
              sizes="(max-width: 1024px) 90vw, 560px"
              className="shadow-[0_34px_70px_rgba(20,26,22,0.2)]"
            />
            <p className="tile-cut-sm absolute right-3 top-3 max-w-[13rem] bg-paper/95 px-4 py-3 text-xs leading-snug text-charcoal shadow-lg sm:right-5 sm:top-5">
              <span className="font-display block text-sm font-bold text-forest">Field House, London</span>
              Upper Tribunal, Immigration and Asylum Chamber
            </p>
          </div>
        </div>
      </section>

      {/* Country evidence: where the witnesses' knowledge comes from. */}
      <section className="bg-night py-16 text-cream sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow !text-[#C9B5BF]">Country evidence</p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight sm:text-4xl">
                The appellant&apos;s question is always local.
              </h2>
            </div>
            <p className="max-w-md text-cream/70">
              Generic CPINs describe a country. Expert witnesses answer for this profile, in this region, under current
              conditions.
            </p>
          </div>
          <ul className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 md:grid-cols-3 lg:grid-cols-6">
            {FIELD.map((f) => (
              <li key={f.place} className="min-w-0">
                <div className="tile-cut-sm relative aspect-[3/4] overflow-hidden bg-forest">
                  <Image src={f.photo.src} alt={f.photo.alt} fill sizes="(max-width: 768px) 45vw, (max-width: 1024px) 30vw, 200px" className="object-cover" />
                  <Road surface="#141A16" width={7} />
                </div>
                <p className="font-display mt-4 text-base font-bold">{f.place}</p>
                <p className="mt-1 text-sm text-cream/60">{f.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why-it-matters" className="scroll-mt-28 bg-surface py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:px-8">
          <RoadPhoto
            photo={photos.archivesReadingRoom}
            surface="white"
            aspect="aspect-[4/3]"
            sizes="(max-width: 1024px) 90vw, 560px"
            className="order-2 lg:order-1"
          />
          <div className="order-1 min-w-0 lg:order-2">
            <p className="eyebrow">For immigration solicitors</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-forest sm:text-4xl">
              Tribunals weigh independence, not advocacy dressed as expertise.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-body sm:text-[1.05rem]">
              <p>
                Immigration and asylum tribunals expect expert witnesses whose paramount duty is to the tribunal, not
                the instructing party. That duty is set by CPR Part 35, Ikarian Reefer independence principles and
                the Immigration Tribunal Practice Direction on expert evidence (2024).
              </p>
              <p>
                Country condition witnesses, persecution analysts and human rights experts close the gap that generic
                Home Office material leaves, with dated sources, field knowledge and a methodology the Upper Tribunal
                can test.
              </p>
              <p>
                This site is the witness network hub. Report standards and CPIN frameworks sit at our sister hub,{" "}
                <a
                  href={SISTER_HUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve"
                >
                  immigrationexpertreports.com
                </a>
                . We are not a law firm and do not give legal advice: we route qualified independent witnesses.
              </p>
            </div>
          </div>
        </div>
        <dl className="mx-auto mt-16 grid max-w-7xl gap-5 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
          {[
            {
              dt: "Practice Direction 2024",
              dd: "Expert evidence duties, disclosure and oral evidence expectations for the FTT and UT.",
            },
            {
              dt: "Legal Aid pathway",
              dd: "LAA prior authority support, rate expectations and early instruction timing.",
            },
            {
              dt: "Network depth",
              dd: "Country and thematic sites across Somalia, Nigeria, Pakistan, Afghanistan and more.",
            },
          ].map((item) => (
            <div key={item.dt} className="tile-card p-7">
              <dt className="font-display text-lg font-bold text-forest">{item.dt}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-body">{item.dd}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="instruction-spine" className="scroll-mt-28 bg-sage py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="min-w-0">
              <p className="eyebrow">Instruction</p>
              <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-forest sm:text-4xl">
                Four decisions that determine whether expert evidence holds.
              </h2>
              <RoadPhoto
                photo={photos.innerTemple}
                surface="sage"
                aspect="aspect-[4/3]"
                sizes="(max-width: 1024px) 90vw, 440px"
                className="mt-10"
              />
            </div>
            <ol className="grid content-start gap-5 sm:grid-cols-2">
              {INSTRUCTION_SPINE.map((step, i) => (
                <li key={step.title} className="tile-card p-7">
                  <span className="tile-cut-sm flex h-11 w-11 items-center justify-center bg-forest font-display text-base font-bold text-cream">
                    {i + 1}
                  </span>
                  <h3 className="font-display mt-5 text-xl font-bold leading-snug text-forest">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-body">{step.body}</p>
                </li>
              ))}
              <li className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm sm:col-span-2">
                <Link href="/expert-witness-framework" className="inline-flex min-h-[44px] items-center font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve">
                  Expert witness framework
                </Link>
                <Link href="/oral-evidence" className="inline-flex min-h-[44px] items-center font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve">
                  Oral evidence guide
                </Link>
                <Link href="/fees" className="inline-flex min-h-[44px] items-center font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve">
                  Fees and Legal Aid
                </Link>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow">Letters of instruction</p>
            <h2 className="font-display mt-4 text-3xl font-bold leading-tight text-forest sm:text-4xl">
              Assumed facts. Precise questions. Exchange dates.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-body sm:text-lg">
              Weak letters of instruction produce reports that read as advocacy. Strong ones define the factual
              matrix, ask tribunal-facing questions and leave enough research time before exchange, especially on
              Legal Aid matters that need prior authority.
            </p>
            <Link
              href="/how-to-instruct"
              className="tile-cut-sm mt-8 inline-flex min-h-[50px] items-center bg-forest px-7 text-sm font-bold text-cream hover:bg-forest-deep"
            >
              Read the instruction guide
            </Link>
          </div>
          <div className="grid grid-cols-5 gap-4">
            <RoadPhoto
              photo={photos.archivesResearchers}
              aspect="aspect-[4/5]"
              sizes="(max-width: 1024px) 55vw, 340px"
              road={12}
              className="col-span-3"
            />
            <div className="col-span-2 flex flex-col gap-4 pt-12">
              <div className="tile-cut-sm relative aspect-square overflow-hidden bg-forest">
                <Image src={photos.interpreterBooths.src} alt={photos.interpreterBooths.alt} fill sizes="220px" className="object-cover" />
              </div>
              <div className="tile-cut-sm relative aspect-square overflow-hidden bg-forest">
                <Image src={photos.lincolnsLibrary.src} alt={photos.lincolnsLibrary.alt} fill sizes="220px" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="witness-index" className="scroll-mt-28 border-t border-line bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Witness disciplines</p>
              <h2 className="font-display mt-4 text-3xl font-bold text-forest sm:text-4xl">Disciplines the tribunal can test.</h2>
            </div>
            <Link href="/witness-types" className="inline-flex min-h-[44px] items-center text-sm font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve">
              Full witness directory
            </Link>
          </div>
          <div className="mt-12">
            <CardGrid
              items={featuredWitnesses.map((w) => ({
                title: w.title,
                description: excerpt(w.content),
                href: `/witness-types/${w.slug}`,
              }))}
            />
          </div>
        </div>
      </section>

      <section id="case-pathways" className="scroll-mt-28 bg-paper py-16 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:px-8">
          <div className="min-w-0">
            <p className="eyebrow">Case pathways</p>
            <h2 className="font-display mt-4 text-3xl font-bold text-forest sm:text-4xl">From fresh claim to Upper Tribunal.</h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-body">
              Different proceedings call for different witness combinations. The case type pages show which disciplines
              usually pair with asylum appeals, deportation, country guidance challenges and oral evidence listings.
            </p>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {caseTypes.slice(0, 6).map((c) => (
                <li key={c.slug}>
                  <Link
                    href={`/case-types/${c.slug}`}
                    className="tile-card group flex min-h-[60px] items-center justify-between gap-3 px-5 py-3 font-display text-base font-bold text-forest hover:text-mauve"
                  >
                    {c.title}
                    <svg aria-hidden viewBox="0 0 16 10" className="h-2.5 w-4 shrink-0 text-mauve transition-transform group-hover:translate-x-1">
                      <path d="M0 5 H14 M10 1 L14 5 L10 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/case-types" className="mt-6 inline-flex min-h-[44px] items-center text-sm font-semibold text-forest underline decoration-mauve underline-offset-4 hover:text-mauve">
              All case types
            </Link>
          </div>
          <RoadPhoto
            photo={photos.witnessBox}
            aspect="aspect-[4/5]"
            sizes="(max-width: 1024px) 90vw, 480px"
            position="object-[40%_50%]"
          />
        </div>
      </section>

      <CTASection />
    </>
  );
}
