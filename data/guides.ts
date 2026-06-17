import type { ContentPage } from "./content-types";
import { enrichContentPageLinks } from "./related-links";

export const guides: ContentPage[] = [
  {
    slug: "cpr-part-35-immigration-guide",
    title: "CPR Part 35 Immigration Guide",
    metaTitle: "CPR Part 35 for Immigration Expert Witnesses: Complete Guide",
    metaDescription:
      "CPR Part 35 rules applied to immigration expert witnesses — Ikarian Reefer independence, tribunal duties, report requirements, and expert obligations in asylum appeals.",
    h1: "CPR Part 35 for Immigration Expert Witnesses: Complete Guide",
    content: [
      "CPR Part 35 governs expert evidence in civil proceedings and is applied by analogy in immigration tribunal proceedings. The rules establish the expert's paramount duty to the tribunal, requirements for expert reports, and procedures for joint experts and oral evidence.",
      "The foundational principle from Ikarian Reefer [1993] 2 Lloyd's Rep 68 requires experts to provide independent, objective evidence regardless of who instructs or pays them. Immigration tribunal experts owe the same duty — their overriding obligation is to assist the tribunal, not to advance the instructing party's case.",
      "CPR Part 35.3 requires experts to state the substance of all material instructions, identify assumptions, distinguish fact from opinion, and state the range of opinion where there is a range. The Immigration Tribunal Practice Direction 2024 and Adam Pipe October 2025 guidance reinforce these requirements for immigration appeals.",
      "Solicitors instructing experts should understand CPR Part 35 obligations to avoid improper influence on report content. Letters of instruction should ask questions, not suggest answers. Experts who cannot support the instructed position must say so clearly.",
    ],
    faqs: [
      {
        question: "Does CPR Part 35 apply to immigration tribunals?",
        answer:
          "CPR Part 35 is applied by analogy in immigration tribunal proceedings. The principles of expert independence, report content, and tribunal duty are fully applicable, reinforced by the Immigration Tribunal Practice Direction 2024.",
      },
      {
        question: "What is the expert's duty under CPR Part 35?",
        answer:
          "The expert owes a paramount duty to the tribunal to provide independent, objective evidence within their expertise. This overrides any obligation to the instructing party.",
      },
    ],
    relatedLinks: [
      { label: "Expert witness framework", href: "/expert-witness-framework" },
      { label: "Qualifications", href: "/qualifications" },
      { label: "Glossary: CPR Part 35", href: "/glossary#cpr-part-35" },
    ],
  },
  {
    slug: "instructing-immigration-expert-witness",
    title: "Instructing an Immigration Expert Witness",
    metaTitle: "Instructing an Immigration Expert Witness: Solicitor's Guide",
    metaDescription:
      "Complete solicitor's guide to instructing immigration expert witnesses — letter of instruction, documents, timing, fees, Legal Aid, and network routing.",
    h1: "Instructing an Immigration Expert Witness: Solicitor's Guide",
    content: [
      "Successful expert witness instruction begins with identifying the right witness discipline and jurisdiction-specific expertise. Country condition witnesses for ground-level analysis; persecution witnesses for Convention nexus; human rights witnesses for Article 3; linguistic identity witnesses for nationality disputes.",
      "The letter of instruction is the foundation of compliant expert evidence. It must set out specific questions, provide the complete document bundle, identify assumed facts, state the tribunal deadline, and confirm funding. Never draft or influence report conclusions.",
      "Use the network directory to route instructions to jurisdiction-specific witnesses — Somalia Expert, Nigeria Expert, Pakistan Country Expert, and thematic sites including Persecution Expert and Human Rights Experts. This hub coordinates instruction while maintaining CPR Part 35 independence.",
      "For Legal Aid cases, obtain LAA prior authority before the expert begins work. Submit realistic fee estimates, expert qualifications, and explanation of necessity. Early instruction supports both LAA approval and tribunal deadline compliance.",
    ],
    faqs: [
      {
        question: "How do I choose the right expert witness?",
        answer:
          "Match witness discipline to case issues, then use the network directory for jurisdiction-specific expertise. Many cases require multiple witness types — country condition plus persecution, or human rights plus medical coordination.",
      },
      {
        question: "What documents should I send to the expert?",
        answer:
          "Witness statements, refusal letter, CPIN, previous determinations, country guidance decisions, tribunal directions, and any prior expert evidence. Provide everything relevant — gaps in the bundle undermine report quality.",
      },
    ],
    relatedLinks: [
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Choosing the right expert", href: "/guides/choosing-right-expert-witness" },
      { label: "Network directory", href: "/network" },
    ],
  },
  {
    slug: "oral-evidence-tribunal-guide",
    title: "Oral Evidence Tribunal Guide",
    metaTitle: "Oral Evidence at Immigration Tribunal: Expert Witness Guide",
    metaDescription:
      "When tribunals direct oral expert evidence, preparation standards, cross-examination, hearing procedure, and supplementary oral testimony at FTT and UT hearings.",
    h1: "Oral Evidence at Immigration Tribunal: Expert Witness Guide",
    content: [
      "Oral evidence by expert witnesses is directed where the tribunal needs to test expert methodology, credibility, or specific findings through cross-examination. Not all expert reports require oral evidence — but experts should be prepared to attend unless specifically excused.",
      "Preparation requires thorough review of the report, letter of instruction, source materials, and any joint statements. Experts must ensure consistency between written and oral testimony and be prepared to defend source selection and methodology under questioning.",
      "At hearing, the expert confirms their report under oath, may give supplementary oral evidence within expertise, and faces cross-examination. The expert's duty to the tribunal requires honest answers even where they do not support the client's case.",
      "Joint expert meetings before hearing reduce oral evidence time by identifying agreed matters. Focus cross-examination preparation on genuinely disputed issues identified in the joint statement.",
    ],
    faqs: [
      {
        question: "When is oral evidence directed?",
        answer:
          "Where the tribunal considers cross-examination necessary — typically when expert methodology, source selection, or specific findings are in dispute between the parties.",
      },
      {
        question: "Can experts give supplementary oral evidence?",
        answer:
          "Yes — within the scope of their expertise and consistent with their written report. Supplementary evidence must not introduce new opinions not foreshadowed in the written report without tribunal permission.",
      },
    ],
    relatedLinks: [
      { label: "Oral evidence page", href: "/oral-evidence" },
      { label: "Cross-examination preparation", href: "/tribunal-evidence/cross-examination-preparation" },
      { label: "Oral evidence witnesses", href: "/witness-types/oral-evidence-witness" },
    ],
  },
  {
    slug: "choosing-right-expert-witness",
    title: "Choosing the Right Expert Witness",
    metaTitle: "Choosing the Right Immigration Expert Witness for Your Case",
    metaDescription:
      "How to select the right immigration expert witness — country vs persecution vs human rights, network directory use, and witness type matching for tribunal cases.",
    h1: "Choosing the Right Immigration Expert Witness for Your Case",
    content: [
      "Selecting the correct expert witness discipline is the first critical decision. Country condition witnesses assess conditions on the ground. Persecution witnesses apply Refugee Convention methodology. Human rights witnesses apply ECHR and treaty standards. Linguistic identity witnesses address nationality and clan disputes.",
      "Within each discipline, jurisdiction-specific expertise matters. A general Africa expert may not have the Somalia clan analysis required for MOJ framework cases. Use the network directory to match country and profile to the right specialist witness site.",
      "Consider whether multiple witnesses are needed. Complex cases may require country condition plus persecution analysis, or human rights plus medical coordination for torture survivors. Instruct complementary witnesses early to allow coordination and joint statements.",
      "Verify expert qualifications: field research experience, prior tribunal acceptance, language proficiency, academic credentials, CPR Part 35 compliance, and no conflict of interest. See our qualifications page for full credential standards.",
    ],
    faqs: [
      {
        question: "Country condition or persecution witness — which first?",
        answer:
          "Start with country condition if the appeal turns on conditions in the country of origin. Add persecution analysis if Convention nexus is disputed. Many asylum appeals require both.",
      },
      {
        question: "How do I use the network directory?",
        answer:
          "Match the appellant's country and profile to the relevant network site — country sites for jurisdiction-specific witnesses, thematic sites for persecution and human rights expertise.",
      },
    ],
    relatedLinks: [
      { label: "Witness types", href: "/witness-types" },
      { label: "Network directory", href: "/network" },
      { label: "Qualifications", href: "/qualifications" },
    ],
  },
  {
    slug: "legal-aid-expert-witness-guide",
    title: "Legal Aid Expert Witness Guide",
    metaTitle: "Legal Aid Expert Witness Instruction Guide",
    metaDescription:
      "Legal Aid Agency prior authority for immigration expert witnesses — rates, timing, instruction bundles, and LAA-compatible expert evidence for tribunal cases.",
    h1: "Legal Aid Expert Witness Instruction Guide",
    content: [
      "Legal Aid practitioners must obtain LAA prior authority before instructing expert witnesses. The application must demonstrate that expert evidence is necessary, the proposed fee is reasonable, and the instruction timeline allows fair proceedings.",
      "Include in prior authority applications: specific issues requiring expert analysis, expert qualifications and CV, indicative fee estimate with breakdown, tribunal deadline, and explanation of why CPIN or Country Guidance alone is insufficient.",
      "LAA rates for immigration expert witnesses vary by discipline, jurisdiction complexity, and urgency. Country condition reports for major jurisdictions with security deterioration require more research time and attract higher fees than straightforward cases.",
      "Do not instruct the expert to begin work until prior authority is granted. Document the authority reference in the letter of instruction. If authority is refused, explore review, adjournment, or alternative funding before proceeding.",
    ],
    faqs: [
      {
        question: "What fee information does the LAA need?",
        answer:
          "Indicative total fee, hourly rate if applicable, estimated hours, any disbursements, and comparison with standard rates for the expert discipline and jurisdiction.",
      },
      {
        question: "Can I instruct an expert before LAA authority?",
        answer:
          "You may contact experts for availability and fee estimates before authority, but the expert should not begin substantive work until prior authority is granted.",
      },
    ],
    relatedLinks: [
      { label: "Fees", href: "/fees" },
      { label: "Legal Aid tribunal evidence", href: "/tribunal-evidence/legal-aid-expert-witness-rates" },
      { label: "How to instruct", href: "/how-to-instruct" },
    ],
  },
  {
    slug: "witness-vs-report-expert-guide",
    title: "Witness vs Report Expert Guide",
    metaTitle: "Expert Witness vs Expert Report: What's the Difference?",
    metaDescription:
      "Difference between immigration expert witnesses (oral evidence, qualifications, tribunal appearance) and immigration expert reports (report standards, CPIN framework) — network positioning.",
    h1: "Expert Witness vs Expert Report: What's the Difference?",
    content: [
      "immigrationexpertwitnesses.com is the network master hub for expert WITNESSES — qualifications, oral evidence, CPR Part 35 duties, tribunal appearance, and the witness directory connecting solicitors to country-specific and thematic expert witness sites.",
      "immigrationexpertreports.com is the sister hub for expert REPORTS — report standards, report types, CPIN framework, Practice Direction 2024 compliance, and the Adam Pipe October 2025 report structure guide. Reports and witnesses are complementary but distinct roles.",
      "An expert witness may provide both a written report and oral evidence at tribunal. However, the witness role encompasses tribunal appearance, cross-examination preparedness, joint expert meetings, and ongoing credibility under scrutiny — capabilities beyond report production alone.",
      "Solicitors should use both hubs: instruct witnesses through this site for tribunal appearance and oral evidence capability; consult the reports hub for report standards, structure requirements, and report-type taxonomy when preparing instructions.",
    ],
    faqs: [
      {
        question: "Do I need a witness or a report?",
        answer:
          "Most immigration appeals need an expert report at minimum. Where oral evidence may be directed, instruct a witness prepared to attend tribunal. The witness role includes report production plus hearing attendance capability.",
      },
      {
        question: "Are witness and report sites the same experts?",
        answer:
          "The network connects the same specialist expertise across both hubs. This site focuses on witness role, qualifications, and oral evidence; the reports site focuses on report standards and compliance.",
      },
    ],
    relatedLinks: [
      { label: "Sister hub: Immigration Expert Reports", href: "https://www.immigrationexpertreports.com" },
      { label: "What is an expert witness?", href: "/what-is-an-immigration-expert-witness" },
      { label: "Expert witness framework", href: "/expert-witness-framework" },
    ],
  },
];

export function getGuide(slug: string) {
  const page = guides.find((g) => g.slug === slug);
  return page ? enrichContentPageLinks(page, "guide") : undefined;
}
