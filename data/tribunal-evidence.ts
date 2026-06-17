import type { ContentPage } from "./content-types";
import { enrichContentPageLinks } from "./related-links";

export const tribunalEvidence: ContentPage[] = [
  {
    slug: "instructing-expert-witness",
    title: "Instructing an Expert Witness",
    metaTitle: "Instructing an Immigration Expert Witness | Solicitor's Guide",
    metaDescription:
      "How to instruct an immigration expert witness — letter of instruction, documents, expert selection, timing, fee estimates, Legal Aid prior authority, and network routing.",
    h1: "Instructing an Immigration Expert Witness | Solicitor's Guide",
    content: [
      "Instructing an immigration expert witness requires a clear letter of instruction, complete document bundle, realistic timeline, and — for Legal Aid cases — prior authority from the Legal Aid Agency. The letter should set out the specific issues for expert analysis, identify assumed facts, state the tribunal deadline, and confirm funding arrangements.",
      "Provide all relevant documents: witness statements, Home Office refusal letter, CPIN, previous determinations, country guidance decisions, and any prior expert evidence. The expert must distinguish between assumed facts and independent analysis — a requirement reinforced by the Adam Pipe October 2025 guidance.",
      "Expert selection should match witness discipline to case issues: country condition for ground-level analysis, persecution for Convention nexus, human rights for Article 3, linguistic identity for nationality disputes. Use the network directory to route to jurisdiction-specific witnesses.",
      "Instruct as early as possible. Expert reports require research time, and tribunal exchange deadlines under the Practice Direction 2024 are strict. Late instruction risks non-compliance, refusal of late evidence, or reduced weight at hearing.",
    ],
    faqs: [
      {
        question: "What should a letter of instruction to an expert witness include?",
        answer:
          "The letter should set out the specific issues for expert analysis, provide all relevant documents (witness statements, CPIN, previous determinations), identify assumed facts, state the tribunal deadline, and confirm funding arrangements (Legal Aid prior authority if applicable).",
      },
      {
        question: "How early should I instruct an expert witness?",
        answer:
          "As early as possible — expert reports require research time, and tribunal exchange deadlines are strict. Late instruction risks non-compliance with Practice Direction 2024 exchange requirements.",
      },
    ],
    relatedLinks: [
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Legal Aid guide", href: "/guides/legal-aid-expert-witness-guide" },
      { label: "Network directory", href: "/network" },
    ],
  },
  {
    slug: "expert-report-submission-deadlines",
    title: "Expert Report Submission Deadlines",
    metaTitle: "Expert Report Deadlines Immigration Tribunal | Exchange Requirements",
    metaDescription:
      "Immigration tribunal expert report exchange deadlines — Practice Direction 2024 requirements, late evidence rules, and timing for FTT and Upper Tribunal proceedings.",
    h1: "Expert Report Submission Deadlines Immigration Tribunal",
    content: [
      "The Immigration Tribunal Practice Direction 2024 sets mandatory exchange requirements for expert reports in asylum and immigration appeals. Tribunals issue directions specifying deadlines for expert report exchange, witness statements, and bundle submission — non-compliance risks refusal of evidence or adverse costs consequences.",
      "Expert reports submitted after the directed deadline may be refused unless the tribunal grants permission for late evidence. Permission requires explanation of the delay and demonstration that the opposing party can fairly respond. Late expert evidence is a common ground for reduced weight at hearing.",
      "The default 20-page report length limit under the Practice Direction affects preparation time. Longer reports require tribunal permission — factor this into instruction timelines. Joint expert reports may be directed to reduce duplication and exchange complexity.",
      "Coordinate expert deadlines with overall appeal preparation. Allow buffer time for expert review of the letter of instruction, research, draft report, and final sign-off before the exchange deadline.",
    ],
    faqs: [
      {
        question: "What happens if expert evidence is submitted late?",
        answer:
          "The tribunal may refuse late expert evidence or admit it with reduced weight. Permission for late evidence requires explanation of delay and fairness to the opposing party. Avoid late submission by instructing experts early.",
      },
      {
        question: "Does the 20-page limit affect deadline planning?",
        answer:
          "Yes — the default 20-page limit under Practice Direction 2024 means experts must be selective. Reports exceeding 20 pages require tribunal permission, which should be sought before the expert begins writing.",
      },
    ],
    relatedLinks: [
      { label: "Expert witness framework", href: "/expert-witness-framework" },
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Sister hub: report standards", href: "https://www.immigrationexpertreports.com/report-standards" },
    ],
  },
  {
    slug: "oral-evidence-hearing",
    title: "Oral Evidence at Hearing",
    metaTitle: "Oral Evidence at Immigration Tribunal | Expert Witness Guide",
    metaDescription:
      "When tribunals direct oral expert evidence, hearing procedure, expert role in oral testimony, consistency requirements, and supplementary evidence at FTT and UT hearings.",
    h1: "Oral Evidence at Immigration Tribunal | Expert Witness Guide",
    content: [
      "The tribunal may direct an expert witness to attend the FTT or UT hearing to give oral evidence. This typically occurs where the expert's credibility, methodology, or specific findings are in dispute, or where cross-examination of the expert report is necessary for fair determination of the appeal.",
      "At hearing, the expert confirms their report, may give supplementary oral evidence within the scope of their expertise, and faces cross-examination from the opposing party's representative. The expert must remain independent and objective throughout — not advocate for the instructing party.",
      "Video link attendance may be permitted in appropriate circumstances, but the expert must be available for real-time cross-examination. Tribunal directions on expert attendance should be communicated to the expert at instruction stage.",
      "See our dedicated oral evidence page for comprehensive guidance on preparation, hearing procedure, joint expert meetings, and post-hearing supplementary reports.",
    ],
    faqs: [
      {
        question: "What happens when an expert witness gives oral evidence?",
        answer:
          "The expert attends the FTT or UT hearing, confirms their report, may give supplementary oral evidence, and faces cross-examination from the opposing party's representative. The expert must remain independent and objective throughout.",
      },
      {
        question: "Can an expert give oral evidence without attending in person?",
        answer:
          "Video link attendance may be permitted by the tribunal in appropriate circumstances, but the expert must be available for real-time cross-examination.",
      },
    ],
    relatedLinks: [
      { label: "Oral evidence guide", href: "/oral-evidence" },
      { label: "Cross-examination preparation", href: "/tribunal-evidence/cross-examination-preparation" },
      { label: "Oral evidence witnesses", href: "/witness-types/oral-evidence-witness" },
    ],
  },
  {
    slug: "cross-examination-preparation",
    title: "Cross-Examination Preparation",
    metaTitle: "Expert Witness Cross-Examination Immigration Tribunal",
    metaDescription:
      "Preparing immigration expert witnesses for tribunal cross-examination — methodology defence, source selection, consistency with written reports, and composure under questioning.",
    h1: "Expert Witness Cross-Examination Preparation Immigration Tribunal",
    content: [
      "Cross-examination of expert witnesses at immigration tribunal hearings tests the expert's methodology, source selection, independence, and consistency between written and oral evidence. Effective preparation reduces the risk of concessions that undermine the expert's credibility and the client's case.",
      "Experts should thoroughly review their report, letter of instruction, source materials, and any joint statements before hearing. They must be prepared to explain why specific sources were selected, how assumptions affect conclusions, and what limitations apply to their analysis.",
      "Common cross-examination themes include: selective sourcing, failure to address contrary evidence, reliance on outdated material, confusion between assumed facts and expert opinion, and inconsistency with Country Guidance or CPIN analysis. Experts should anticipate these challenges.",
      "The expert's paramount duty is to the tribunal, not the instructing party. Under cross-examination, experts must give honest answers even where they do not support the client's case. This independence is essential for long-term expert credibility and tribunal acceptance.",
    ],
    faqs: [
      {
        question: "How should experts prepare for cross-examination?",
        answer:
          "Review the report, letter of instruction, and all source materials; ensure consistency between written and oral evidence; prepare to defend methodology and source selection; anticipate challenges on independence and selective sourcing.",
      },
      {
        question: "Can an expert refuse to answer under cross-examination?",
        answer:
          "Experts must answer questions within their expertise honestly and completely. Refusing to answer or evading questions damages credibility. If a question falls outside expertise, the expert should say so clearly rather than speculate.",
      },
    ],
    relatedLinks: [
      { label: "Oral evidence guide", href: "/oral-evidence" },
      { label: "Oral evidence at hearing", href: "/tribunal-evidence/oral-evidence-hearing" },
      { label: "Expert witness framework", href: "/expert-witness-framework" },
    ],
  },
  {
    slug: "joint-statement-meetings",
    title: "Joint Statement & Expert Meetings",
    metaTitle: "Joint Expert Meetings Immigration Tribunal | Single Joint Expert",
    metaDescription:
      "Joint expert meetings and statements in immigration tribunals — single joint expert direction, areas of agreement and disagreement, and Practice Direction 2024 requirements.",
    h1: "Joint Expert Meetings & Statements Immigration Tribunal",
    content: [
      "The Immigration Tribunal Practice Direction 2024 expresses preference for single joint experts where appropriate. Where multiple experts are instructed, tribunals may direct joint expert meetings to identify areas of agreement and disagreement, reducing hearing time and focusing cross-examination on genuinely disputed issues.",
      "Joint expert meetings should produce a joint statement setting out: agreed facts and methodology, areas of disagreement with reasons, and any matters requiring tribunal determination. The joint statement is exchanged alongside individual expert reports.",
      "Experts attending joint meetings must maintain independence. Agreement in a joint statement does not compromise the expert's duty to the tribunal — it reflects genuine consensus on matters within shared expertise. Disagreement should be clearly articulated with reasoning.",
      "Solicitors should facilitate joint meetings promptly after exchange of expert reports. Delay in joint meetings compresses hearing preparation time and may result in tribunal criticism of both parties.",
    ],
    faqs: [
      {
        question: "What are joint expert meetings?",
        answer:
          "Meetings between experts instructed by different parties to identify areas of agreement and disagreement. The outcome is typically a joint statement exchanged with the tribunal, reducing hearing time on undisputed expert matters.",
      },
      {
        question: "When will the tribunal direct a single joint expert?",
        answer:
          "Where the tribunal considers one expert sufficient for the issues in dispute — common in country condition cases with overlapping expertise. Early instruction of a joint expert avoids duplication and reduces costs.",
      },
    ],
    relatedLinks: [
      { label: "Expert witness framework", href: "/expert-witness-framework" },
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    slug: "legal-aid-expert-witness-rates",
    title: "Legal Aid Expert Witness Rates",
    metaTitle: "Legal Aid Expert Witness Fees | LAA Prior Authority",
    metaDescription:
      "Legal Aid Agency prior authority for immigration expert witness fees — rate expectations, instruction timing, and LAA-compatible expert witness instruction for tribunal cases.",
    h1: "Legal Aid Expert Witness Rates & LAA Prior Authority",
    content: [
      "Legal Aid practitioners must obtain prior authority from the Legal Aid Agency (LAA) before instructing expert witnesses in legally aided immigration cases. The LAA assesses whether expert evidence is necessary, whether the proposed fee is reasonable, and whether the instruction timing allows fair proceedings.",
      "Prior authority applications should include: the specific issues requiring expert analysis, the expert's qualifications, an indicative fee estimate, the tribunal deadline, and explanation of why expert evidence is necessary rather than reliance on CPIN or Country Guidance alone.",
      "LAA rate expectations vary by expert discipline and report complexity. Country condition reports for major jurisdictions typically require higher fees reflecting research depth. Expedited instruction may attract additional costs — factor this into prior authority applications.",
      "Instruct experts early to support LAA applications with realistic timelines. Late instruction with urgent deadlines may result in LAA refusal or reduced fee approval. Our network provides indicative fee ranges for prior authority applications.",
    ],
    faqs: [
      {
        question: "How do I obtain LAA prior authority for an expert witness?",
        answer:
          "Submit a prior authority application to the LAA with the expert's fee estimate, qualifications, specific issues for analysis, and explanation of necessity. Do not instruct the expert to begin work until authority is granted.",
      },
      {
        question: "What if LAA refuses prior authority?",
        answer:
          "Consider whether the case can proceed without expert evidence, apply for review of the refusal, or explore private funding. Document the LAA decision — it may be relevant to an adjournment application if expert evidence is essential.",
      },
    ],
    relatedLinks: [
      { label: "Legal Aid guide", href: "/guides/legal-aid-expert-witness-guide" },
      { label: "Fees", href: "/fees" },
      { label: "How to instruct", href: "/how-to-instruct" },
    ],
  },
];

export function getTribunalEvidence(slug: string) {
  const page = tribunalEvidence.find((t) => t.slug === slug);
  return page ? enrichContentPageLinks(page, "tribunal-evidence") : undefined;
}
