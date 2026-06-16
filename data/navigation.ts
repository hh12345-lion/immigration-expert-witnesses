import { witnessTypes } from "./witness-types";
import { caseTypes } from "./case-types";
import { tribunalEvidence } from "./tribunal-evidence";
import { guides } from "./guides";

export type NavLink = { label: string; href: string };

export const witnessTypesNavLinks: NavLink[] = witnessTypes.map((w) => ({
  label: w.title,
  href: `/witness-types/${w.slug}`,
}));

export const caseTypesNavLinks: NavLink[] = caseTypes.map((c) => ({
  label: c.title,
  href: `/case-types/${c.slug}`,
}));

export const tribunalEvidenceNavLinks: NavLink[] = tribunalEvidence.map((t) => ({
  label: t.title,
  href: `/tribunal-evidence/${t.slug}`,
}));

export const guidesNavLinks: NavLink[] = guides.map((g) => ({
  label: g.title,
  href: `/guides/${g.slug}`,
}));

export const resourcesNavLinks: NavLink[] = [
  { label: "Expert Witness Framework", href: "/expert-witness-framework" },
  { label: "Oral Evidence Guide", href: "/oral-evidence" },
  { label: "How to Instruct", href: "/how-to-instruct" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Network Directory", href: "/network" },
  { label: "Glossary", href: "/glossary" },
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
