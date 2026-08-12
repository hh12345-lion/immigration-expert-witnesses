import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Oral Evidence by Immigration Expert Witnesses | Tribunal Guide",
  description:
    "Complete guide to oral evidence by immigration expert witnesses at FTT and UT hearings — when directed, preparation, cross-examination, joint expert meetings, and supplementary testimony.",
  path: "/oral-evidence",
});

const hearingSteps = [
  { step: "1. Tribunal direction", action: "Confirm whether oral expert evidence is directed or excused" },
  { step: "2. Report review", action: "Expert reviews written report, instruction, and all source materials" },
  { step: "3. Joint meeting", action: "Attend joint expert meeting if directed; produce joint statement" },
  { step: "4. Hearing attendance", action: "Expert sworn in; confirms report; faces cross-examination" },
  { step: "5. Tribunal questions", action: "Tribunal may ask supplementary questions at any stage" },
  { step: "6. Supplementary report", action: "Only with tribunal permission after oral evidence if required" },
];

const oralEvidenceFaqs = [
  {
    question: "When is oral evidence directed for immigration expert witnesses?",
    answer:
      "The tribunal directs oral evidence where expert credibility, methodology, or specific findings are in dispute — or where cross-examination is necessary for fair determination of the appeal.",
  },
  {
    question: "How should solicitors prepare experts for FTT cross-examination?",
    answer:
      "Ensure consistency between written and oral testimony, rehearse methodology and source selection, and anticipate challenges on independence, dated sources, and assumed facts under CPR Part 35.",
  },
  {
    question: "Can immigration expert witnesses attend tribunal by video link?",
    answer:
      "Video attendance may be permitted in appropriate circumstances, but the expert must be available for real-time cross-examination as directed by the tribunal.",
  },
];

export default function OralEvidencePage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Oral Evidence" }];

  return (
    <>
      <PageJsonLd
        breadcrumbs={crumbs}
        faqs={oralEvidenceFaqs}
        extra={articleSchema({
          headline: "Oral Evidence by Immigration Expert Witnesses: Complete Tribunal Guide",
          description:
            "Complete guide to oral evidence by immigration expert witnesses at FTT and UT hearings.",
          path: "/oral-evidence",
        })}
      />
      <PageShell
        title="Oral Evidence by Immigration Expert Witnesses: Complete Tribunal Guide"
        subtitle="Unique witness-site content — oral testimony, cross-examination, and hearing procedure at immigration tribunals."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#3d443f] leading-relaxed">
          Oral evidence by expert witnesses is a distinct capability of the immigration expert witness role — separate
          from report production alone. While immigrationexpertreports.com addresses report standards and structure,
          this site owns the witness role including tribunal appearance, cross-examination preparedness, and oral
          testimony under CPR Part 35 independence principles.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">FTT Hearing Procedure Checklist</h2>
        <div className="table-scroll mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="mb-3 text-left text-sm text-[#3d443f]">
              Immigration expert witness oral evidence procedure at FTT and Upper Tribunal hearings
            </caption>
            <thead>
              <tr className="border-b border-[#c3c7c0] bg-[#e6e8e4]">
                <th className="p-3 font-semibold text-[#121614]">Stage</th>
                <th className="p-3 font-semibold text-[#121614]">Solicitor / expert action</th>
              </tr>
            </thead>
            <tbody>
              {hearingSteps.map((row) => (
                <tr key={row.step} className="border-b border-[#c3c7c0]">
                  <td className="p-3 font-medium text-[#121614]">{row.step}</td>
                  <td className="p-3 text-[#3d443f]">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">When Oral Evidence Is Directed</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          The tribunal may direct an expert witness to attend the First-tier Tribunal (FTT) or Upper Tribunal (UT)
          hearing to give oral evidence. This typically occurs where the expert&apos;s credibility, methodology, or
          specific findings are in dispute between the parties — or where cross-examination of the expert report is
          necessary for fair determination of the appeal.
        </p>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Not every expert report requires oral evidence. However, experts should be instructed on the basis that
          oral attendance may be directed unless specifically excused by the tribunal. Instructing a witness who is
          unwilling or unable to attend tribunal undermines the value of the expert evidence if oral evidence is
          subsequently directed.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">Preparation for Oral Evidence</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Effective preparation requires thorough review of the expert&apos;s written report, letter of instruction, all
          source materials, and any joint statements with opposing experts. The expert must ensure consistency between
          written and oral testimony — contradictions under cross-examination damage credibility irreparably.
        </p>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Experts should anticipate cross-examination themes: selective sourcing, failure to address contrary evidence,
          reliance on outdated material, confusion between assumed facts and independent opinion, and inconsistency
          with Country Guidance or CPIN analysis. Preparation should include rehearsing explanations of methodology and
          source selection.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">Hearing Procedure</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          At hearing, the expert is sworn in and confirms their report. The instructing party&apos;s representative may
          ask supplementary questions within the scope of the expert&apos;s evidence. The opposing party&apos;s
          representative then cross-examines the expert. The tribunal may ask its own questions at any stage.
        </p>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Video link attendance may be permitted in appropriate circumstances, but the expert must be available for
          real-time cross-examination. Tribunal directions on expert attendance should be communicated to the expert
          at instruction stage and confirmed before the hearing date.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">Cross-Examination</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Cross-examination tests the expert&apos;s independence, methodology, and consistency. Under CPR Part 35 and
          Ikarian Reefer principles, the expert must give honest answers even where they do not support the instructing
          party&apos;s case. Experts who advocate under cross-examination face tribunal criticism and potential
          exclusion of their evidence.
        </p>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          See our{" "}
          <Link href="/tribunal-evidence/cross-examination-preparation" className="text-[#3a5244] hover:underline">
            cross-examination preparation guide
          </Link>{" "}
          for detailed preparation standards.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">Joint Expert Meetings</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Where multiple experts are instructed, tribunals may direct joint expert meetings before hearing. The outcome
          is typically a joint statement identifying areas of agreement and disagreement. Joint meetings reduce oral
          evidence time and focus cross-examination on genuinely disputed issues.
        </p>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Experts attending joint meetings must maintain independence. Agreement in a joint statement reflects genuine
          consensus — not compromise of the expert&apos;s duty to the tribunal. See{" "}
          <Link href="/tribunal-evidence/joint-statement-meetings" className="text-[#3a5244] hover:underline">
            joint expert meetings guide
          </Link>
          .
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#121614]">Post-Hearing Supplementary Reports</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          In limited circumstances, tribunals may permit supplementary expert reports after oral evidence — for
          example, where cross-examination revealed a need for additional analysis on a specific point. Supplementary
          reports require tribunal permission and must be exchanged with the opposing party.
        </p>

        <FAQSection faqs={oralEvidenceFaqs} title="Oral Evidence — FAQs" />

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/network" className="font-semibold text-[#3a5244] hover:underline">
            Network directory
          </Link>
          <Link href="/witness-types/oral-evidence-witness" className="font-semibold text-[#3a5244] hover:underline">
            Oral evidence witnesses
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#6e2433] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/tribunal-evidence/oral-evidence-hearing" className="font-semibold text-[#3a5244] hover:underline">
            Oral evidence at hearing
          </Link>
          <a href={SISTER_HUB_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#6e2433] hover:underline">
            Sister hub: report standards
          </a>
        </div>
      </PageShell>
    </>
  );
}
