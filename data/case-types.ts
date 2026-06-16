import type { ContentPage } from "./content-types";
import { enrichContentPageLinks } from "./related-links";

export const caseTypes: ContentPage[] = [
  {
    slug: "ftt-asylum-appeal",
    title: "FTT Asylum Appeal",
    metaTitle: "Expert Witnesses for FTT Asylum Appeals UK | First-tier Tribunal",
    metaDescription:
      "Qualified immigration expert witnesses for First-tier Tribunal asylum appeals — country condition, persecution, human rights, and linguistic identity evidence with CPR Part 35 compliance.",
    h1: "Expert Witnesses for FTT Asylum Appeals UK",
    content: [
      "First-tier Tribunal (FTT) asylum appeals are the primary forum for refugee protection claims in the UK. Expert witness evidence on country conditions, persecution methodology, human rights standards, and linguistic identity is frequently decisive — particularly where the Home Office relies on generic CPIN analysis.",
      "FTT proceedings require strict compliance with tribunal directions on expert evidence exchange. The Immigration Tribunal Practice Direction 2024 sets default report length limits, independence standards, and exchange deadlines. Early witness instruction is critical given increased FTT asylum volumes and backlog in 2025–2026.",
      "Country condition witnesses address profile-specific risks beyond CPIN generalisations. Persecution witnesses apply Refugee Convention methodology including HJ (Iran) and RT (Zimbabwe) standards. Linguistic identity witnesses support credibility findings where nationality or clan is disputed.",
      "Legal Aid practitioners must obtain prior authority for expert witness fees before instruction. Our network routes cases to jurisdiction-specific witnesses while maintaining CPR Part 35 independence standards across all FTT proceedings.",
    ],
    faqs: [
      {
        question: "What expert witnesses are needed for FTT asylum appeals?",
        answer:
          "Most FTT asylum appeals require country condition evidence at minimum. Persecution analysis, human rights, linguistic identity, and internal relocation witnesses may also be needed depending on the claim. Instruct early to meet exchange deadlines.",
      },
      {
        question: "When should I instruct an expert for an FTT appeal?",
        answer:
          "As soon as grounds of appeal are filed and the issues are identified. Expert reports require research time, and late evidence risks refusal or reduced weight under tribunal directions.",
      },
    ],
    relatedLinks: [
      { label: "Witness types", href: "/witness-types" },
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Expert witness framework", href: "/expert-witness-framework" },
    ],
  },
  {
    slug: "upper-tribunal-appeal",
    title: "Upper Tribunal Appeal",
    metaTitle: "Expert Witnesses for Upper Tribunal Appeals UK | UT Immigration",
    metaDescription:
      "Immigration expert witnesses for Upper Tribunal permission and substantive appeals — country guidance challenges, error of law cases, and complex multi-jurisdictional evidence.",
    h1: "Expert Witnesses for Upper Tribunal Appeals UK",
    content: [
      "Upper Tribunal (UT) immigration appeals involve permission applications and substantive hearings on errors of law identified by the First-tier Tribunal. Expert witness evidence at UT level often addresses complex country guidance questions, methodological challenges to FTT findings, and fresh expert analysis where the FTT failed to engage with relevant evidence.",
      "Country guidance challenges at the Upper Tribunal remain high-value proceedings. Expert witnesses must address leading CG cases — MOJ (Somalia), HJ (Iran), RT (Zimbabwe), AAA (Somalia), DD (Afghanistan) — and demonstrate how current country conditions affect the appellant's specific profile.",
      "UT appeals may require supplementary expert reports addressing the specific error of law. Experts giving oral evidence at UT hearings face rigorous cross-examination on methodology, source selection, and consistency with their written analysis.",
      "Coordinate UT expert instruction with any FTT expert evidence already in the bundle. Joint expert meetings may be directed where the Home Office instructs a responding expert. Early UT instruction supports permission applications where expert evidence demonstrates the FTT's failure to apply relevant country guidance.",
    ],
    faqs: [
      {
        question: "Do Upper Tribunal appeals need new expert evidence?",
        answer:
          "Not always — existing FTT expert evidence may suffice if it addresses the error of law. However, UT appeals on country guidance or CPIN challenge often require supplementary expert analysis addressing the specific legal error identified.",
      },
      {
        question: "Can FTT experts give oral evidence at the UT?",
        answer:
          "Yes — the UT may direct oral evidence from experts who gave written evidence at FTT level, or from newly instructed experts. Experts should be prepared for UT cross-examination on methodology and CG application.",
      },
    ],
    relatedLinks: [
      { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
      { label: "Oral evidence guide", href: "/oral-evidence" },
      { label: "CPIN challenge witnesses", href: "/witness-types/cpin-challenge-expert-witness" },
    ],
  },
  {
    slug: "deportation-removal",
    title: "Deportation & Removal",
    metaTitle: "Expert Witnesses for Deportation & Removal UK | Article 3 Evidence",
    metaDescription:
      "Immigration expert witnesses for UK deportation and removal proceedings — ECHR Article 3, human rights on return, torture survivors, and medical-psychiatric coordination.",
    h1: "Expert Witnesses for Deportation & Removal Proceedings UK",
    content: [
      "Deportation and removal proceedings engage ECHR Article 3 where return would expose the appellant to torture, inhuman or degrading treatment. Human rights expert witnesses apply treaty and ECHR standards alongside country condition evidence on return risk.",
      "Foreign national offenders and long-resident migrants facing deportation often require multi-disciplinary expert evidence: country condition witnesses on return risk, human rights witnesses on Article 3 standards, and medical or psychiatric experts where torture history or mental health deterioration on return is claimed.",
      "Article 8 family and private life claims may require country condition evidence on integration barriers and hardship on return, though the primary expert discipline is often human rights rather than Refugee Convention persecution analysis.",
      "Instruct human rights and country witnesses early in deportation proceedings. LAA prior authority applies to legally aided cases. Coordinate medical evidence with country analysis in torture survivor cases following Istanbul Protocol standards.",
    ],
    faqs: [
      {
        question: "What expert evidence is needed for deportation appeals?",
        answer:
          "Article 3 deportation cases typically require human rights expert evidence and country condition analysis on return risk. Medical or psychiatric experts may be needed for torture survivors. Article 8 cases may require country evidence on hardship on return.",
      },
      {
        question: "Can expert witnesses address Article 8 as well as Article 3?",
        answer:
          "Country condition and human rights witnesses can address conditions relevant to both articles. However, Article 8 proportionality is primarily a legal question — expert evidence supports factual findings on return conditions and integration barriers.",
      },
    ],
    relatedLinks: [
      { label: "Human rights witnesses", href: "/witness-types/human-rights-expert-witness" },
      { label: "Medical & psychiatric witnesses", href: "/witness-types/medical-psychiatric-expert-witness" },
      { label: "Human rights claims", href: "/case-types/human-rights-claims" },
    ],
  },
  {
    slug: "fresh-claims",
    title: "Fresh Claims",
    metaTitle: "Expert Witnesses for Fresh Claims UK | New Asylum Evidence",
    metaDescription:
      "Immigration expert witnesses for fresh asylum claims — new country evidence, changed conditions, and supplementary expert analysis for Home Office fresh claim assessments.",
    h1: "Expert Witnesses for Fresh Claims UK",
    content: [
      "Fresh claims arise where new evidence — not previously considered — would create a realistic prospect of success. Expert witness evidence frequently forms the basis of fresh claims, particularly where country conditions have deteriorated since the original refusal or where new expert analysis addresses profile-specific risks not covered by the original CPIN.",
      "Country condition witnesses providing evidence of changed circumstances since the original determination are central to many fresh claims. Security deterioration in Somalia, Afghanistan, Nigeria, and other jurisdictions in 2025–2026 has generated fresh claims supported by updated expert analysis.",
      "Fresh claim expert evidence must be genuinely new — not merely a rehash of arguments considered in the original refusal. Experts should identify what has changed, cite dated sources post-dating the original decision, and address why the new evidence creates a realistic prospect of success.",
      "Instruct experts as soon as fresh claim material is identified. Expert reports supporting fresh claims should be exchanged promptly to support the Home Office fresh claim assessment and any subsequent judicial review.",
    ],
    faqs: [
      {
        question: "Can expert evidence support a fresh claim?",
        answer:
          "Yes — where expert evidence addresses genuinely new material not previously considered, such as changed country conditions, new profile-specific risk analysis, or expert evidence not available at the original refusal stage.",
      },
      {
        question: "What makes expert evidence 'new' for fresh claim purposes?",
        answer:
          "Evidence must not have been considered in the original refusal. Changed country conditions with dated post-decision sources, new expert analysis of previously unassessed risks, or expert evidence correcting methodological errors in the original determination may qualify.",
      },
    ],
    relatedLinks: [
      { label: "Country condition witnesses", href: "/witness-types/country-condition-expert-witness" },
      { label: "CPIN challenge witnesses", href: "/witness-types/cpin-challenge-expert-witness" },
      { label: "How to instruct", href: "/how-to-instruct" },
    ],
  },
  {
    slug: "human-rights-claims",
    title: "Human Rights Claims",
    metaTitle: "Expert Witnesses for Human Rights Claims UK | ECHR Immigration",
    metaDescription:
      "Expert witnesses for UK immigration human rights claims — ECHR Articles 3 and 8, ICCPR, CAT, CEDAW, and treaty standards in tribunal proceedings.",
    h1: "Expert Witnesses for Human Rights Claims UK",
    content: [
      "Human rights claims in UK immigration proceedings engage ECHR Articles 3 and 8, and may invoke complementary treaty frameworks including ICCPR, CAT, and CEDAW. Human rights expert witnesses apply these standards to assess whether return or removal would breach the appellant's protected rights.",
      "Article 3 claims require evidence that return would expose the appellant to torture, inhuman or degrading treatment. Human rights witnesses assess this against international standards, while country condition witnesses provide factual evidence on conditions in the country of return.",
      "Article 8 claims engage family and private life proportionality. While primarily legal questions, country condition evidence may support factual findings on integration barriers, family circumstances abroad, and hardship on return.",
      "Gender-based persecution and FGM cases may engage CEDAW standards alongside Refugee Convention analysis. Human rights witnesses with gender expertise coordinate with country condition witnesses on jurisdiction-specific risk profiles.",
    ],
    faqs: [
      {
        question: "What is the difference between human rights and asylum expert evidence?",
        answer:
          "Asylum evidence applies Refugee Convention persecution methodology. Human rights evidence applies ECHR and treaty standards. Many cases engage both — instruct witnesses with appropriate disciplinary expertise for each standard.",
      },
      {
        question: "When is a human rights expert needed instead of a persecution expert?",
        answer:
          "When the claim is framed under ECHR Article 3 or 8 rather than Refugee Convention protection — common in deportation cases, humanitarian protection claims, and cases where Convention nexus is not established but return risk under Article 3 is argued.",
      },
    ],
    relatedLinks: [
      { label: "Human rights witnesses", href: "/witness-types/human-rights-expert-witness" },
      { label: "Deportation & removal", href: "/case-types/deportation-removal" },
      { label: "Human Rights Experts network", href: "/network" },
    ],
  },
  {
    slug: "country-guidance-challenges",
    title: "Country Guidance Challenges",
    metaTitle: "Expert Witnesses for Country Guidance Challenges UK | Upper Tribunal",
    metaDescription:
      "Expert witnesses for Upper Tribunal country guidance challenges — MOJ Somalia, HJ Iran, RT Zimbabwe, AAA Somalia, DD Afghanistan, and CG precedent analysis.",
    h1: "Expert Witnesses for Country Guidance Challenges UK",
    content: [
      "Country guidance (CG) challenges at the Upper Tribunal seek to establish or modify tribunal-wide guidance on country conditions. Expert witness evidence is central to CG proceedings — tribunals rely on independent expert analysis to determine whether conditions in a country meet the threshold for CG designation.",
      "Leading CG cases that expert witnesses must address include MOJ and Others (Somalia) [2014] UKUT 00442, HJ (Iran) [2010] UKSC 31, RT (Zimbabwe) [2012] UKSC 38, AAA (Somalia) [2011] UKUT 00444, and DD (Afghanistan) [2020] UKUT 00230. Experts must demonstrate how current conditions affect the CG framework.",
      "CG challenge expert evidence requires the highest methodological standards: dated primary sources, field expertise, identification of assumptions and limitations, and explicit engagement with existing CG authority. Tribunals apply heightened scrutiny to expert independence in CG proceedings.",
      "EUAA Country Guidance is increasingly cited alongside UK CG. Expert witnesses must address EUAA conclusions where relevant, identifying alignment or divergence with UK tribunal authority.",
    ],
    faqs: [
      {
        question: "What expert evidence is needed for a CG challenge?",
        answer:
          "Comprehensive country condition expert evidence addressing the specific CG issues, with dated primary sources, explicit engagement with existing CG cases, and analysis of whether current conditions warrant modified guidance.",
      },
      {
        question: "Can the same expert give evidence in CG and individual appeals?",
        answer:
          "Yes — experts frequently give evidence in both CG challenges and individual appeals. However, CG evidence must address tribunal-wide issues, not only the individual appellant's circumstances.",
      },
    ],
    relatedLinks: [
      { label: "CPIN & CG witnesses", href: "/witness-types/cpin-challenge-expert-witness" },
      { label: "Upper Tribunal appeals", href: "/case-types/upper-tribunal-appeal" },
      { label: "Expert witness framework", href: "/expert-witness-framework" },
    ],
  },
  {
    slug: "judicial-review",
    title: "Judicial Review",
    metaTitle: "Expert Witnesses for Immigration Judicial Review UK",
    metaDescription:
      "Immigration expert witnesses for judicial review proceedings — fresh evidence, CPIN challenge, and supplementary expert analysis for High Court immigration JR.",
    h1: "Expert Witnesses for Immigration Judicial Review UK",
    content: [
      "Judicial review of immigration decisions may be supported by expert witness evidence where fresh material demonstrates unlawfulness — for example, where the decision-maker failed to engage with relevant country evidence, applied outdated CPIN analysis, or ignored expert evidence in the bundle.",
      "Expert evidence in judicial review must be genuinely fresh or demonstrate a material error in the decision-maker's treatment of existing evidence. Courts apply strict rules on new evidence in JR — expert reports should address why the evidence could not have been obtained earlier and how it affects the lawfulness of the decision.",
      "Country condition witnesses may provide supplementary analysis demonstrating that the Home Office failed to consider changed conditions or profile-specific risks. CPIN challenge expert evidence may show the decision relied on generic CPIN analysis inconsistent with dated primary sources.",
      "Coordinate JR expert instruction with any tribunal expert evidence. Expert reports for JR should be concise, focused on the specific ground of challenge, and compliant with CPR Part 35 independence standards.",
    ],
    faqs: [
      {
        question: "Can new expert evidence be filed in judicial review?",
        answer:
          "Courts may permit fresh expert evidence in JR where it demonstrates unlawfulness and could not reasonably have been obtained earlier. The evidential threshold is strict — expert reports must address why the evidence is fresh and material to the ground of challenge.",
      },
      {
        question: "What expert evidence supports a CPIN challenge in JR?",
        answer:
          "Expert analysis demonstrating the decision-maker relied on outdated or generic CPIN analysis, failed to consider profile-specific risks, or ignored dated primary sources contradicting the CPIN conclusions.",
      },
    ],
    relatedLinks: [
      { label: "CPIN challenge witnesses", href: "/witness-types/cpin-challenge-expert-witness" },
      { label: "Fresh claims", href: "/case-types/fresh-claims" },
      { label: "How to instruct", href: "/how-to-instruct" },
    ],
  },
  {
    slug: "administrative-review",
    title: "Administrative Review",
    metaTitle: "Expert Witnesses for Administrative Review UK | Immigration",
    metaDescription:
      "Expert witness evidence for UK immigration administrative review — supplementary country analysis and fresh evidence for in-country administrative review applications.",
    h1: "Expert Witnesses for Administrative Review UK",
    content: [
      "Administrative review (AR) is an internal Home Office review mechanism for eligible immigration decisions. While AR has limited scope compared to tribunal appeals, expert evidence may support AR applications where the decision involved a caseworking error in applying country evidence or CPIN analysis.",
      "Expert witness reports for AR should be focused and concise, addressing the specific alleged error. Country condition witnesses may demonstrate that the refusal failed to consider profile-specific risks or relied on outdated country information.",
      "AR is typically a precursor to further challenge — expert evidence obtained for AR may form the basis of a subsequent appeal or judicial review if AR is unsuccessful. Instruct experts early to preserve evidence for downstream proceedings.",
      "Legal Aid coverage for AR expert evidence is limited. Private or pro bono instruction may be necessary. Our network provides indicative fee estimates for AR-stage expert analysis.",
    ],
    faqs: [
      {
        question: "Is expert evidence admissible in administrative review?",
        answer:
          "AR applicants may submit additional evidence including expert reports where it addresses a caseworking error in the original decision. The scope is narrower than tribunal appeals — evidence must relate to the specific review ground.",
      },
      {
        question: "Should I instruct an expert before or after AR?",
        answer:
          "Before AR if expert evidence directly addresses the review ground. If AR fails, the same expert evidence may support a subsequent appeal — early instruction preserves evidence and meets downstream deadlines.",
      },
    ],
    relatedLinks: [
      { label: "Country condition witnesses", href: "/witness-types/country-condition-expert-witness" },
      { label: "How to instruct", href: "/how-to-instruct" },
      { label: "Fees", href: "/fees" },
    ],
  },
];

export function getCaseType(slug: string) {
  const page = caseTypes.find((c) => c.slug === slug);
  return page ? enrichContentPageLinks(page, "case-type") : undefined;
}
