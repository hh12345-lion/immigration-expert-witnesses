export type GlossaryTerm = {
  term: string;
  definition: string;
  link?: string;
  /** Override auto-generated fragment ID for SEO-critical anchors */
  anchorId?: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "CPR Part 35",
    definition:
      "Civil Procedure Rules Part 35 governs expert evidence in civil proceedings and is applied by analogy in UK immigration tribunals. Establishes expert independence, report content requirements, and tribunal duty.",
    link: "/guides/cpr-part-35-immigration-guide",
  },
  {
    term: "Ikarian Reefer",
    definition:
      "Ikarian Reefer [1993] 2 Lloyd's Rep 68 — foundational authority establishing that expert witnesses owe a paramount duty to the tribunal to provide independent, objective evidence regardless of who instructs them.",
    link: "/expert-witness-framework",
  },
  {
    term: "Practice Direction 2024 (Expert Evidence)",
    anchorId: "practice-direction-2024",
    definition:
      "The Immigration Tribunal Practice Direction on expert evidence (2024) sets mandatory requirements for expert reports in asylum and immigration appeals — including default 20-page limit, structure, and independence standards.",
    link: "/expert-witness-framework",
  },
  {
    term: "Adam Pipe Guidance (2025)",
    definition:
      "The Adam Pipe expert report guide (October 2025) provides tribunal expectations on report structure, assumptions, limitations, distinguishing opinion from assumed facts, and source dating.",
    link: "/expert-witness-framework",
  },
  {
    term: "Expert Witness (Immigration Tribunal)",
    definition:
      "An independent expert who provides country condition, persecution, human rights, or linguistic evidence to UK immigration tribunals with a paramount duty to the tribunal under CPR Part 35.",
    link: "/what-is-an-immigration-expert-witness",
  },
  {
    term: "Country Condition Expert Witness",
    definition:
      "An expert witness providing independent evidence on security, human rights, state protection, internal relocation, and profile-specific risks in the appellant's country of origin.",
    link: "/witness-types/country-condition-expert-witness",
  },
  {
    term: "Persecution Expert Witness",
    definition:
      "An expert witness analysing Refugee Convention grounds, nexus, well-founded fear, state protection, and persecution methodology including HJ/RT standards.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "Human Rights Expert Witness",
    definition:
      "An expert witness applying ECHR Articles 3 and 8, ICCPR, CAT, and CEDAW standards to deportation, removal, and humanitarian protection cases.",
    link: "/witness-types/human-rights-expert-witness",
  },
  {
    term: "Linguistic Expert Witness",
    definition:
      "An expert witness assessing dialect, clan membership, cultural knowledge, and nationality claims — critical in clan-based asylum jurisdictions.",
    link: "/witness-types/linguistic-identity-expert-witness",
  },
  {
    term: "Oral Evidence (Tribunal)",
    definition:
      "Expert testimony given at FTT or UT hearings, including confirmation of the written report, supplementary evidence, and cross-examination.",
    link: "/oral-evidence",
  },
  {
    term: "Cross-Examination (Expert Witness)",
    definition:
      "Questioning of an expert witness at tribunal hearing to test methodology, source selection, independence, and consistency with the written report.",
    link: "/tribunal-evidence/cross-examination-preparation",
  },
  {
    term: "Joint Expert Meeting",
    definition:
      "A meeting between experts instructed by different parties to identify areas of agreement and disagreement, producing a joint statement for the tribunal.",
    link: "/tribunal-evidence/joint-statement-meetings",
  },
  {
    term: "Letter of Instruction",
    definition:
      "The document sent to an expert witness setting out specific issues for analysis, assumed facts, relevant documents, tribunal deadline, and funding arrangements.",
    link: "/how-to-instruct",
  },
  {
    term: "Country Guidance Case",
    definition:
      "An Upper Tribunal decision providing tribunal-wide guidance on country conditions — binding on FTT decisions unless distinguished on materially different facts.",
    link: "/case-types/country-guidance-challenges",
  },
  {
    term: "CPIN (Country Policy Information Note)",
    definition:
      "Home Office country policy document providing generic country analysis. Independent expert witnesses may challenge CPIN findings with dated primary sources.",
    link: "/witness-types/cpin-challenge-expert-witness",
  },
  {
    term: "State Protection",
    definition:
      "The availability of effective state protection against persecution — a key element of Refugee Convention analysis assessed by persecution and country condition experts.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "Internal Relocation",
    definition:
      "Whether the appellant could reasonably relocate within their country of origin to avoid persecution — assessed under the Reasonableness test.",
    link: "/witness-types/internal-relocation-expert-witness",
  },
  {
    term: "Well-Founded Fear",
    definition:
      "The Refugee Convention standard requiring a real risk of persecution for a Convention reason — assessed through persecution methodology and country evidence.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "Refugee Convention 1951",
    definition:
      "The international treaty defining refugee status and persecution grounds — the primary legal framework for asylum claims assessed by persecution expert witnesses.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "Article 3 ECHR",
    definition:
      "European Convention on Human Rights Article 3 prohibits torture, inhuman or degrading treatment — central to deportation and removal expert evidence.",
    link: "/witness-types/human-rights-expert-witness",
  },
  {
    term: "Article 8 ECHR",
    definition:
      "European Convention on Human Rights Article 8 protects family and private life — relevant to deportation proportionality and human rights claims.",
    link: "/case-types/human-rights-claims",
  },
  {
    term: "Legal Aid",
    anchorId: "legal-aid",
    definition:
      "Public funding for immigration and asylum cases through the Legal Aid Agency — prior authority is required before instructing expert witnesses in legally aided proceedings.",
    link: "/guides/legal-aid-expert-witness-guide",
  },
  {
    term: "Legal Aid Prior Authority",
    definition:
      "LAA approval required before instructing expert witnesses in legally aided immigration cases — must be obtained before the expert begins work.",
    link: "/guides/legal-aid-expert-witness-guide",
  },
  {
    term: "FTT (First-tier Tribunal)",
    anchorId: "first-tier-tribunal-ftt",
    definition:
      "The First-tier Tribunal (Immigration and Asylum Chamber) — the primary forum for asylum appeals and most immigration judicial review matters.",
    link: "/case-types/ftt-asylum-appeal",
  },
  {
    term: "UT (Upper Tribunal)",
    definition:
      "The Upper Tribunal (Immigration and Asylum Chamber) — hears permission appeals and substantive appeals on errors of law, including country guidance challenges.",
    link: "/case-types/upper-tribunal-appeal",
  },
  {
    term: "MOJ and Others [2014]",
    definition:
      "MOJ and Others (Somalia) [2014] UKUT 00442 — leading Country Guidance on Somalia clan structure, risk profiles, and internal relocation.",
    link: "/witness-types/cpin-challenge-expert-witness",
  },
  {
    term: "HJ (Iran) [2010]",
    definition:
      "HJ (Iran) [2010] UKSC 31 — Supreme Court authority on persecution of gay men, requiring assessment of whether the appellant would conceal identity on return.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "RT (Zimbabwe) [2012]",
    definition:
      "RT (Zimbabwe) [2012] UKSC 38 — Supreme Court authority on imputed political opinion and the methodology for assessing well-founded fear.",
    link: "/witness-types/persecution-expert-witness",
  },
  {
    term: "AAA (Somalia) [2011]",
    definition:
      "AAA (Somalia) [2011] UKUT 00444 — Country Guidance on risk to Somali nationals returned to Mogadishu and southern and central Somalia.",
    link: "/network",
  },
  {
    term: "DD (Afghanistan)",
    definition:
      "DD (Afghanistan) [2020] UKUT 00230 — Country Guidance on risk to civilians in Afghanistan following the Taliban takeover framework.",
    link: "/network",
  },
  {
    term: "EUAA Country Guidance",
    definition:
      "European Union Agency for Asylum country guidance increasingly cited in UK appeals — expert witnesses must address EUAA alongside UK CG and CPIN.",
    link: "/witness-types/cpin-challenge-expert-witness",
  },
  {
    term: "Independence (Expert Witness)",
    definition:
      "The expert's paramount duty to provide objective evidence to the tribunal regardless of instructing party — the core principle from Ikarian Reefer and CPR Part 35.",
    link: "/expert-witness-framework",
  },
  {
    term: "Assumed Facts",
    definition:
      "Facts assumed by the expert for the purpose of analysis, which must be clearly distinguished from the expert's independent opinion — required by Adam Pipe 2025.",
    link: "/expert-witness-framework",
  },
  {
    term: "Report Exchange Deadline",
    definition:
      "The tribunal-directed deadline for exchanging expert reports — non-compliance risks refusal of evidence under Practice Direction 2024.",
    link: "/tribunal-evidence/expert-report-submission-deadlines",
  },
  {
    term: "Single Joint Expert",
    definition:
      "One expert instructed jointly by both parties or directed by the tribunal — preferred under Practice Direction 2024 to avoid duplication.",
    link: "/tribunal-evidence/joint-statement-meetings",
  },
  {
    term: "Tribunal Direction (Expert Evidence)",
    definition:
      "A formal direction from the tribunal specifying expert report exchange deadlines, page limits, joint expert requirements, and oral evidence attendance.",
    link: "/tribunal-evidence/instructing-expert-witness",
  },
];

export function getGlossaryTermsWithLinks() {
  return glossaryTerms;
}
