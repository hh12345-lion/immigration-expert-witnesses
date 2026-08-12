import { witnessTypes } from "./witness-types";
import { caseTypes } from "./case-types";
import { tribunalEvidence } from "./tribunal-evidence";
import { guides } from "./guides";

export type NavLink = { label: string; href: string; blurb?: string };

const WITNESS_BLURBS: Record<string, string> = {
  "country-condition-expert-witness": "Security, protection & profile risk beyond CPIN.",
  "persecution-expert-witness": "Convention nexus, HJ/RT standards, non-state actors.",
  "human-rights-expert-witness": "Article 3 / 8 risk and threshold analysis.",
  "linguistic-identity-expert-witness": "Language, dialect & identity verification.",
  "internal-relocation-expert-witness": "Viability of relocation on the ground.",
  "cpin-challenge-expert-witness": "Independent challenge to Home Office CPINs.",
  "medical-coordination-expert-witness": "Medical evidence coordination for tribunal.",
  "oral-evidence-witness": "Live evidence at FTT and Upper Tribunal.",
};

export const witnessTypesNavLinks: NavLink[] = witnessTypes.map((w) => ({
  label: w.title,
  href: `/witness-types/${w.slug}`,
  blurb: WITNESS_BLURBS[w.slug],
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
  blurb: "Instruction focus for this case pathway.",
}));

export const tribunalEvidenceNavLinks: NavLink[] = tribunalEvidence.map((t) => ({
  label: t.title,
  href: `/tribunal-evidence/${t.slug}`,
  blurb: "Practice Direction & oral evidence context.",
}));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  {
    label: "Expert Witness Framework",
    href: "/expert-witness-framework",
    blurb: "CPR Part 35 duties and independence.",
  },
  {
    label: "Oral Evidence Guide",
    href: "/oral-evidence",
    blurb: "Preparing witnesses for hearing.",
  },
  {
    label: "How to Instruct",
    href: "/how-to-instruct",
    blurb: "Deadlines, letters of instruction, LAA.",
  },
  {
    label: "Qualifications",
    href: "/qualifications",
    blurb: "What tribunals expect to see.",
  },
  {
    label: "Network Directory",
    href: "/network",
    blurb: "Country and thematic specialist sites.",
  },
  {
    label: "Glossary",
    href: "/glossary",
    blurb: "Tribunal evidence terminology.",
  },
  ...guidesNavLinks,
];

export const mobileNavGroups: { title: string; links: NavLink[] }[] = [
  { title: "Witness Types", links: [{ label: "All witness types", href: "/witness-types" }, ...witnessTypesNavLinks] },
  { title: "Case Types", links: [{ label: "All case types", href: "/case-types" }, ...caseTypesNavLinks] },
  {
    title: "Tribunal Evidence",
    links: [{ label: "Tribunal evidence hub", href: "/tribunal-evidence" }, ...tribunalEvidenceNavLinks],
  },
  { title: "Resources", links: resourcesNavLinks },
  {
    title: "Quick Links",
    links: [
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "What is an expert witness?", href: "/what-is-an-immigration-expert-witness" },
    ],
  },
];
