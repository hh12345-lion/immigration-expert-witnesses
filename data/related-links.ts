import type { ContentPage } from "./content-types";
import { witnessTypes } from "./witness-types";
import { guides } from "./guides";
import { caseTypes } from "./case-types";
import { tribunalEvidence } from "./tribunal-evidence";
import { SISTER_HUB_URL } from "@/lib/constants";

export type RelatedLink = { label: string; href: string };

export function mergeRelatedLinks(...groups: (RelatedLink[] | undefined)[]): RelatedLink[] {
  const seen = new Set<string>();
  const out: RelatedLink[] = [];
  for (const group of groups) {
    if (!group) continue;
    for (const link of group) {
      if (!seen.has(link.href)) {
        seen.add(link.href);
        out.push(link);
      }
    }
  }
  return out;
}

export const CORE_LINKS = {
  contact: { label: "Contact us", href: "/contact" } satisfies RelatedLink,
  instruct: { label: "How to instruct an expert witness", href: "/how-to-instruct" } satisfies RelatedLink,
  framework: {
    label: "CPR Part 35 expert witness duties",
    href: "/expert-witness-framework",
  } satisfies RelatedLink,
  network: { label: "Immigration expert witness network directory", href: "/network" } satisfies RelatedLink,
  witnessTypes: { label: "Witness types hub", href: "/witness-types" } satisfies RelatedLink,
  oralEvidence: { label: "Oral evidence at tribunal", href: "/oral-evidence" } satisfies RelatedLink,
  sisterHub: {
    label: "Immigration expert reports UK",
    href: SISTER_HUB_URL,
  } satisfies RelatedLink,
  choosingGuide: {
    label: "Choosing the right expert witness",
    href: "/guides/choosing-right-expert-witness",
  } satisfies RelatedLink,
};

/** Appendix C — homepage required internal link targets */
export const HOMEPAGE_REQUIRED_PATHS = [
  "/contact",
  "/how-to-instruct",
  "/expert-witness-framework",
  "/oral-evidence",
  "/network",
  "/witness-types/country-condition-expert-witness",
  "/witness-types/persecution-expert-witness",
  "/witness-types/human-rights-expert-witness",
  "/witness-types/oral-evidence-witness",
] as const;

/** Section 5 Rule B — network hub required internal links */
export const NETWORK_REQUIRED_PATHS = [
  "/expert-witness-framework",
  "/witness-types",
  "/guides/choosing-right-expert-witness",
  "/how-to-instruct",
  "/contact",
] as const;

/** Section 5 Rule A — indexable hub pages */
export const HUB_PAGES_RULE_A = [
  "/witness-types",
  "/tribunal-evidence",
  "/case-types",
  "/guides",
  "/oral-evidence",
  "/network",
  "/expert-witness-framework",
] as const;

const WITNESS_TYPE_BASE: RelatedLink[] = [
  CORE_LINKS.network,
  CORE_LINKS.framework,
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
];

const TRIBUNAL_BASE: RelatedLink[] = [
  CORE_LINKS.framework,
  CORE_LINKS.network,
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
];

const CASE_TYPE_BASE: RelatedLink[] = [
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
  CORE_LINKS.witnessTypes,
];

const GUIDE_BASE: RelatedLink[] = [
  CORE_LINKS.framework,
  CORE_LINKS.network,
  CORE_LINKS.instruct,
  CORE_LINKS.contact,
];

/** Appendix C witness type minimum links matrix */
const WITNESS_TYPE_SLUG_EXTRAS: Record<string, RelatedLink[]> = {
  "country-condition-expert-witness": [
    { label: "Instructing expert witnesses at tribunal", href: "/tribunal-evidence/instructing-expert-witness" },
    { label: "FTT asylum appeals", href: "/case-types/ftt-asylum-appeal" },
    CORE_LINKS.choosingGuide,
  ],
  "persecution-expert-witness": [
    { label: "Cross-examination preparation", href: "/tribunal-evidence/cross-examination-preparation" },
    { label: "FTT asylum appeals", href: "/case-types/ftt-asylum-appeal" },
    { label: "Witness vs report expert guide", href: "/guides/witness-vs-report-expert-guide" },
  ],
  "human-rights-expert-witness": [
    { label: "Oral evidence at hearing", href: "/tribunal-evidence/oral-evidence-hearing" },
    { label: "Deportation & removal cases", href: "/case-types/deportation-removal" },
    { label: "Legal Aid expert witness guide", href: "/guides/legal-aid-expert-witness-guide" },
  ],
  "linguistic-identity-expert-witness": [
    { label: "Cross-examination preparation", href: "/tribunal-evidence/cross-examination-preparation" },
    { label: "FTT asylum appeals", href: "/case-types/ftt-asylum-appeal" },
    { label: "Instructing immigration expert witnesses", href: "/guides/instructing-immigration-expert-witness" },
  ],
  "internal-relocation-expert-witness": [
    { label: "Joint expert statement meetings", href: "/tribunal-evidence/joint-statement-meetings" },
    { label: "Upper Tribunal appeals", href: "/case-types/upper-tribunal-appeal" },
    { label: "CPR Part 35 immigration guide", href: "/guides/cpr-part-35-immigration-guide" },
  ],
  "cpin-challenge-expert-witness": [
    { label: "Instructing expert witnesses at tribunal", href: "/tribunal-evidence/instructing-expert-witness" },
    { label: "Country guidance challenges", href: "/case-types/country-guidance-challenges" },
    CORE_LINKS.choosingGuide,
  ],
  "medical-psychiatric-expert-witness": [
    { label: "Oral evidence at hearing", href: "/tribunal-evidence/oral-evidence-hearing" },
    { label: "Fresh claims", href: "/case-types/fresh-claims" },
    { label: "Instructing immigration expert witnesses", href: "/guides/instructing-immigration-expert-witness" },
  ],
  "oral-evidence-witness": [
    { label: "Oral evidence at hearing", href: "/tribunal-evidence/oral-evidence-hearing" },
    { label: "FTT asylum appeals", href: "/case-types/ftt-asylum-appeal" },
    { label: "Oral evidence tribunal guide", href: "/guides/oral-evidence-tribunal-guide" },
    CORE_LINKS.oralEvidence,
  ],
};

export function getWitnessTypeRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, WITNESS_TYPE_BASE, WITNESS_TYPE_SLUG_EXTRAS[slug]);
}

export function getTribunalEvidenceRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, TRIBUNAL_BASE);
}

export function getCaseTypeRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, CASE_TYPE_BASE);
}

export function getGuideRelatedLinks(slug: string, existing?: RelatedLink[]): RelatedLink[] {
  return mergeRelatedLinks(existing, GUIDE_BASE);
}

export type ContentLinkKind = "witness-type" | "guide" | "case-type" | "tribunal-evidence";

export function enrichContentPageLinks(page: ContentPage, kind: ContentLinkKind): ContentPage {
  let relatedLinks = page.relatedLinks;
  if (kind === "witness-type") {
    relatedLinks = getWitnessTypeRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "guide") {
    relatedLinks = getGuideRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "case-type") {
    relatedLinks = getCaseTypeRelatedLinks(page.slug, page.relatedLinks);
  } else if (kind === "tribunal-evidence") {
    relatedLinks = getTribunalEvidenceRelatedLinks(page.slug, page.relatedLinks);
  }
  return { ...page, relatedLinks };
}

/** Assert Appendix C minimum internal links on dynamic content pages */
export function verifyRelatedLinksMatrix(): string[] {
  const errors: string[] = [];

  for (const page of witnessTypes) {
    const links = getWitnessTypeRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/network", "/expert-witness-framework", "/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`witness-types/${page.slug} missing link to ${required}`);
      }
    }
    const extras = WITNESS_TYPE_SLUG_EXTRAS[page.slug];
    if (!extras) {
      errors.push(`witness-types/${page.slug} missing Appendix C matrix entry`);
    }
  }

  for (const page of tribunalEvidence) {
    const links = getTribunalEvidenceRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/expert-witness-framework", "/network", "/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`tribunal-evidence/${page.slug} missing link to ${required}`);
      }
    }
  }

  for (const page of guides) {
    const links = getGuideRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/expert-witness-framework", "/network", "/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`guides/${page.slug} missing link to ${required}`);
      }
    }
  }

  for (const page of caseTypes) {
    const links = getCaseTypeRelatedLinks(page.slug, page.relatedLinks);
    const hrefs = new Set(links.map((l) => l.href));
    for (const required of ["/how-to-instruct", "/contact"]) {
      if (!hrefs.has(required)) {
        errors.push(`case-types/${page.slug} missing link to ${required}`);
      }
    }
  }

  return errors;
}
