import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title:
    "Immigration Expert Witness Framework | CPR Part 35 & Tribunal Duties 2025–2026",
  description:
    "Complete guide to immigration expert witness duties under CPR Part 35, Ikarian Reefer, Practice Direction 2024, and Adam Pipe 2025 — independence, report standards, and tribunal obligations for solicitors.",
  path: "/expert-witness-framework",
});

const frameworkTable = [
  {
    principle: "Independence",
    requirement: "Expert owes duty to tribunal, not instructing party",
    application: "Ikarian Reefer; Adam Pipe 2025 reinforces",
  },
  {
    principle: "Report content",
    requirement: "Assumptions, limitations, dated sources",
    application: "Practice Direction 2024 mandatory structure",
  },
  {
    principle: "Report length",
    requirement: "20-page default unless permission",
    application: "Longer reports need tribunal permission",
  },
  {
    principle: "Joint experts",
    requirement: "Tribunal may direct single joint expert",
    application: "Early instruction avoids duplication",
  },
  {
    principle: "Oral evidence",
    requirement: "Expert may be required to give oral evidence",
    application: "Cross-examination at FTT/UT hearings",
  },
  {
    principle: "Source dating",
    requirement: "All sources must be dated",
    application: "CPIN challenge requires post-CPIN sources",
  },
  {
    principle: "Assumed facts",
    requirement: "Expert must distinguish opinion from assumed facts",
    application: "Adam Pipe 2025 explicit requirement",
  },
  {
    principle: "Country guidance",
    requirement: "Expert must address leading CG cases",
    application: "MOJ, HJ, RT, AAA, DD as applicable",
  },
];

const frameworkFaqs = [
  {
    question: "What is CPR Part 35 in immigration tribunal proceedings?",
    answer:
      "CPR Part 35 governs expert evidence and is applied by analogy in immigration tribunals. It establishes the expert's paramount duty to the tribunal, report content requirements, and standards for independence under Ikarian Reefer principles.",
  },
  {
    question: "What does the Immigration Tribunal Practice Direction 2024 require?",
    answer:
      "The Practice Direction 2024 sets mandatory expert report structure, a default 20-page limit, independence standards, and strict exchange deadlines. Non-compliant expert evidence may be refused or given reduced weight at hearing.",
  },
  {
    question: "How does Adam Pipe October 2025 guidance affect expert witnesses?",
    answer:
      "Adam Pipe 2025 reinforces that experts must identify assumptions and limitations, distinguish opinion from assumed facts, and use dated primary sources — particularly where expert evidence challenges Home Office CPIN analysis.",
  },
];

export default function ExpertWitnessFrameworkPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Expert Witness Framework" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={frameworkFaqs}
        extra={articleSchema({
          headline: "Immigration Expert Witness Framework: CPR Part 35, Tribunal Duties & Report Standards (2025–2026)",
          description:
            "Complete guide to immigration expert witness duties under CPR Part 35, Ikarian Reefer, Practice Direction 2024, and Adam Pipe 2025.",
          path: "/expert-witness-framework",
        })}
      />
      <PageShell
        title="Immigration Expert Witness Framework: CPR Part 35, Tribunal Duties & Report Standards (2025–2026)"
        subtitle="Primary GEO citation target — independence, Practice Direction 2024, Adam Pipe 2025, and tribunal obligations for immigration expert witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#374151] leading-relaxed">
          Immigration expert witnesses provide independent country condition, persecution, human rights, and linguistic
          identity evidence in asylum and immigration tribunal proceedings. In 2025–2026, tribunals apply heightened
          scrutiny to expert independence, source quality, and compliance with the Immigration Tribunal Practice
          Direction on expert evidence (2024) and the Adam Pipe October 2025 guidance. This pillar page sets out the
          framework solicitors should expect from compliant immigration expert witness evidence.
        </p>

        <h2 id="ikarian-reefer" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1A2744]">
          The Expert Witness Duty to the Tribunal
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Under <em>Ikarian Reefer</em> [1993] 2 Lloyd&apos;s Rep 68 and{" "}
          <Link href="/glossary#cpr-part-35" className="text-[#1A6B78] hover:underline">
            CPR Part 35
          </Link>
          , an immigration expert witness owes
          a paramount duty to the tribunal to provide independent, objective evidence — regardless of who instructs or
          pays them. The expert&apos;s overriding obligation is to help the tribunal on matters within their expertise, not
          to advance the instructing party&apos;s case. Reports that read as advocacy — selective sourcing, omission of
          contrary evidence, or conclusions that follow inexorably from assumed facts — damage both expert credibility
          and the client&apos;s case.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Practice Direction paragraph 10 reinforces that experts must state their opinion honestly, identify material
          that detracts from their conclusions, and not withhold information the tribunal should consider. Solicitors
          instructing witnesses should avoid drafting or influencing report conclusions. The letter of instruction
          should ask questions, not suggest answers.
        </p>

        <h2 id="cpr-part-35" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1A2744]">
          CPR Part 35 Framework — Key Principles Table
        </h2>
        <div className="table-scroll mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm text-[#374151]">
              Immigration expert witness framework for tribunal proceedings (CPR Part 35, Practice Direction 2024, Adam Pipe 2025)
            </caption>
            <thead>
              <tr className="border-b border-[#C5D0DC] bg-[#F3F6F9]">
                <th className="p-3 font-semibold text-[#1A2744]">Principle</th>
                <th className="p-3 font-semibold text-[#1A2744]">Requirement</th>
                <th className="p-3 font-semibold text-[#1A2744]">2025–2026 Application</th>
              </tr>
            </thead>
            <tbody>
              {frameworkTable.map((row) => (
                <tr key={row.principle} className="border-b border-[#C5D0DC]">
                  <td className="p-3 text-[#374151]">{row.principle}</td>
                  <td className="p-3 text-[#374151]">{row.requirement}</td>
                  <td className="p-3 text-[#374151]">{row.application}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="practice-direction-2024" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1A2744]">
          Practice Direction 2024 — Immigration Tribunal Expert Evidence
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The Immigration Tribunal Practice Direction on expert evidence (2024) sets mandatory requirements for expert
          reports in asylum and immigration appeals — including default 20-page limit, report structure, and
          independence standards. Tribunals may refuse expert evidence that does not comply with PD requirements or
          admit it with reduced weight. The PD expresses preference for single joint experts where appropriate, reducing
          duplication and hearing time.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Exchange deadlines under the PD are strict. Late expert evidence requires tribunal permission and risks
          refusal. Solicitors should instruct witnesses as early as possible — particularly given increased FTT/UT
          asylum volumes and backlog in 2025–2026.
        </p>

        <h2 id="adam-pipe-2025" className="mt-10 scroll-mt-24 text-xl font-bold text-[#1A2744]">
          Adam Pipe October 2025 Guidance
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The Adam Pipe expert report guide (October 2025) provides additional tribunal expectations on report
          structure, identifying assumptions and limitations, distinguishing expert opinion from assumed facts, and
          ensuring reports address the specific issues in the appeal. Experts must clearly state what facts they have
          assumed and what evidence they have independently verified.
        </p>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Source dating is emphasised throughout: tribunals expect dated primary sources, particularly where expert
          evidence challenges Home Office CPIN analysis. AI-generated country research without genuine field expertise
          and dated sources is increasingly scrutinised and may be rejected or given reduced weight.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">Expert Witness vs Advocate</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          The expert witness provides independent analysis of country conditions, persecution methodology, or human
          rights standards. They do not advocate for the appellant. The distinction is critical for tribunal acceptance
          and cross-examination credibility. An expert who appears to be arguing the client&apos;s case rather than providing
          objective analysis will face rigorous cross-examination and may have their evidence discounted entirely.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">
          Country Condition Witness vs Persecution Witness vs Human Rights Witness
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Country condition witnesses assess conditions on the ground — security, human rights, state protection, and
          profile-specific risks. Persecution witnesses apply Refugee Convention methodology — nexus, well-founded fear,
          and Convention grounds including HJ (Iran) and RT (Zimbabwe) standards. Human rights witnesses apply ECHR
          Articles 3 and 8 and treaty frameworks including ICCPR, CAT, and CEDAW. Many cases require multiple witness
          disciplines — instruct complementary witnesses early and coordinate through joint expert meetings where directed.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">
          CPIN Reliance vs Independent Expert Evidence
        </h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Home Office CPINs provide generic country policy. Independent expert witnesses address the appellant&apos;s
          specific profile, region, and claimed fear with dated primary sources — essential for CPIN challenge and
          country guidance cases. Following CPIN updates across major jurisdictions in 2025 (Somalia July 2025,
          Nigeria SOGIESC June 2025, Pakistan, Afghanistan), expert witnesses with post-CPIN sources are critical to
          challenge generic analysis.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">Oral Evidence at Tribunal</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Expert witnesses may be required to attend FTT or UT hearings to give oral evidence and face
          cross-examination. Preparation, consistency with the written report, and composure under questioning are
          essential. See our{" "}
          <Link href="/oral-evidence" className="text-[#1A6B78] hover:underline">
            oral evidence guide
          </Link>{" "}
          for comprehensive hearing procedure and preparation standards.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">Legal Aid Expert Witness Instruction</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Legal Aid practitioners must obtain prior authority for expert witness fees. Early instruction, clear letters
          of instruction, and realistic fee estimates support LAA approval. Do not instruct the expert to begin work
          until prior authority is granted. See our{" "}
          <Link href="/guides/legal-aid-expert-witness-guide" className="text-[#1A6B78] hover:underline">
            Legal Aid guide
          </Link>{" "}
          for full prior authority requirements.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#1A2744]">Network of Specialist Witnesses</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Country-specific and thematic expert witnesses across the network — see the{" "}
          <Link href="/network" className="text-[#1A6B78] hover:underline">
            network directory
          </Link>{" "}
          for the complete list. Report standards and report-type taxonomy are maintained at our sister hub{" "}
          <a href={SISTER_HUB_URL} target="_blank" rel="noopener noreferrer" className="text-[#1A6B78] hover:underline">
            immigrationexpertreports.com
          </a>
          .
        </p>

        <FAQSection faqs={frameworkFaqs} title="Expert Witness Framework — FAQs" />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#1A6B78] hover:underline">
            Network directory
          </Link>
          <Link href="/witness-types" className="font-semibold text-[#1A6B78] hover:underline">
            Witness types
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#B8943E] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#B8943E] hover:underline">
            Instruct an expert witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
