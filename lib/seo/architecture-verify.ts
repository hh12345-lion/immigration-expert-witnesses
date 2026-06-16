import { readFileSync } from "fs";
import { join } from "path";
import { SITE_URL, LINKEDIN_URL, SISTER_HUB_URL } from "../constants";
import { buildPublicUrlInventory } from "./publicUrlInventory";
import { SLUG_REDIRECTS } from "./slug-redirects";
import { witnessTypes } from "../../data/witness-types";
import { tribunalEvidence } from "../../data/tribunal-evidence";
import { caseTypes } from "../../data/case-types";
import { guides } from "../../data/guides";
import {
  verifyRelatedLinksMatrix,
  NETWORK_REQUIRED_PATHS,
  HUB_PAGES_RULE_A,
} from "../../data/related-links";
import { glossaryTerms, getGlossaryTermsWithLinks } from "../../data/glossary";
import { glossaryAnchorId } from "../glossary";
import { networkSites } from "../../data/network-sites";

export type ArchIssue = { level: "error" | "warn"; message: string };

const EXPECTED_WITNESS_SLUGS = [
  "country-condition-expert-witness",
  "persecution-expert-witness",
  "human-rights-expert-witness",
  "linguistic-identity-expert-witness",
  "internal-relocation-expert-witness",
  "cpin-challenge-expert-witness",
  "medical-psychiatric-expert-witness",
  "oral-evidence-witness",
] as const;

const REQUIRED_TRIBUNAL_SLUGS = [
  "oral-evidence-hearing",
  "cross-examination-preparation",
  "joint-statement-meetings",
  "instructing-expert-witness",
  "legal-aid-expert-witness-rates",
] as const;

const REQUIRED_GUIDE_SLUGS = [
  "cpr-part-35-immigration-guide",
  "witness-vs-report-expert-guide",
  "oral-evidence-tribunal-guide",
  "instructing-immigration-expert-witness",
  "legal-aid-expert-witness-guide",
  "choosing-right-expert-witness",
] as const;

const REQUIRED_CASE_TYPE_SLUGS = [
  "ftt-asylum-appeal",
  "upper-tribunal-appeal",
  "deportation-removal",
  "country-guidance-challenges",
  "fresh-claims",
] as const;

const FRAMEWORK_ANCHORS = [
  "cpr-part-35",
  "ikarian-reefer",
  "adam-pipe-2025",
  "practice-direction-2024",
] as const;

const GLOSSARY_SEO_ANCHORS: Record<string, string> = {
  "cpr-part-35": "CPR Part 35",
  "ikarian-reefer": "Ikarian Reefer",
  "adam-pipe-guidance-2025": "Adam Pipe Guidance (2025)",
  "practice-direction-2024": "Practice Direction 2024 (Expert Evidence)",
  "first-tier-tribunal-ftt": "FTT (First-tier Tribunal)",
  "legal-aid": "Legal Aid",
};

function hubPagePath(route: string): string {
  const segment = route.replace(/^\//, "");
  return join(process.cwd(), "app", segment, "page.tsx");
}

export function verifySeoArchitecture(): ArchIssue[] {
  const issues: ArchIssue[] = [];

  if (SITE_URL !== "https://www.immigrationexpertwitnesses.com") {
    issues.push({
      level: "warn",
      message: `SITE_URL should be https://www.immigrationexpertwitnesses.com (got ${SITE_URL})`,
    });
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expectedDynamic =
    witnessTypes.length + tribunalEvidence.length + caseTypes.length + guides.length;
  const dynamicInSitemap = inventory.entries.filter(
    (e) =>
      e.path.startsWith("/witness-types/") ||
      e.path.startsWith("/tribunal-evidence/") ||
      e.path.startsWith("/case-types/") ||
      e.path.startsWith("/guides/")
  ).length;

  if (dynamicInSitemap !== expectedDynamic) {
    issues.push({
      level: "error",
      message: `Expected ${expectedDynamic} dynamic URLs in sitemap inventory, got ${dynamicInSitemap}`,
    });
  }

  for (const slug of EXPECTED_WITNESS_SLUGS) {
    if (!witnessTypes.some((w) => w.slug === slug)) {
      issues.push({ level: "error", message: `Missing witness type slug: ${slug}` });
    }
  }

  for (const slug of REQUIRED_TRIBUNAL_SLUGS) {
    if (!tribunalEvidence.some((t) => t.slug === slug)) {
      issues.push({ level: "error", message: `Missing tribunal evidence slug: ${slug}` });
    }
  }

  for (const slug of REQUIRED_GUIDE_SLUGS) {
    if (!guides.some((g) => g.slug === slug)) {
      issues.push({ level: "error", message: `Missing guide slug: ${slug}` });
    }
  }

  for (const slug of REQUIRED_CASE_TYPE_SLUGS) {
    if (!caseTypes.some((c) => c.slug === slug)) {
      issues.push({ level: "error", message: `Missing case type slug: ${slug}` });
    }
  }

  for (const [legacy, canonical] of Object.entries(SLUG_REDIRECTS)) {
    if (legacy.startsWith("/witness-types/") && !inventory.allPaths.includes(canonical)) {
      issues.push({
        level: "error",
        message: `Slug redirect target missing from sitemap: ${canonical}`,
      });
    }
  }

  for (const msg of verifyRelatedLinksMatrix()) {
    issues.push({ level: "error", message: `Internal links: ${msg}` });
  }

  const homepageSource = readFileSync(join(process.cwd(), "app", "page.tsx"), "utf-8");
  for (const required of [
    "/contact",
    "/how-to-instruct",
    "/expert-witness-framework",
    "/oral-evidence",
    "/network",
  ]) {
    if (!homepageSource.includes(`"${required}"`) && !homepageSource.includes(`'${required}'`)) {
      issues.push({
        level: "error",
        message: `Homepage missing required internal link to ${required}`,
      });
    }
  }
  for (const slug of [
    "country-condition-expert-witness",
    "persecution-expert-witness",
    "human-rights-expert-witness",
    "oral-evidence-witness",
  ]) {
    if (!homepageSource.includes(slug)) {
      issues.push({
        level: "error",
        message: `Homepage missing top witness type slug reference: ${slug}`,
      });
    }
  }

  const networkSource = readFileSync(join(process.cwd(), "app", "network", "page.tsx"), "utf-8");
  for (const required of NETWORK_REQUIRED_PATHS) {
    if (!networkSource.includes(`"${required}"`) && !networkSource.includes(`'${required}'`)) {
      issues.push({
        level: "error",
        message: `Network page missing required internal link to ${required}`,
      });
    }
  }
  if (!networkSource.includes("SISTER_HUB_URL") && !networkSource.includes("immigrationexpertreports.com")) {
    issues.push({
      level: "error",
      message: `Network page missing sister hub link to ${SISTER_HUB_URL}`,
    });
  }
  const networkDataSource = readFileSync(
    join(process.cwd(), "data", "network-sites.ts"),
    "utf-8"
  );
  for (const site of networkSites) {
    if (!networkDataSource.includes(site.url)) {
      issues.push({
        level: "error",
        message: `network-sites.ts missing entry for ${site.url}`,
      });
    }
  }

  for (const hub of HUB_PAGES_RULE_A) {
    const path = hubPagePath(hub);
    try {
      const source = readFileSync(path, "utf-8");
      for (const required of ["/network", "/expert-witness-framework"]) {
        if (!source.includes(`"${required}"`) && !source.includes(`'${required}'`)) {
          issues.push({
            level: "error",
            message: `Hub page ${hub} missing Rule A link to ${required}`,
          });
        }
      }
    } catch {
      issues.push({ level: "error", message: `Missing hub page file for ${hub}` });
    }
  }

  const frameworkSource = readFileSync(
    join(process.cwd(), "app", "expert-witness-framework", "page.tsx"),
    "utf-8"
  );
  for (const anchor of FRAMEWORK_ANCHORS) {
    if (!frameworkSource.includes(`id="${anchor}"`)) {
      issues.push({
        level: "error",
        message: `Expert witness framework missing GEO anchor id="${anchor}"`,
      });
    }
  }
  if (!frameworkSource.includes("<caption")) {
    issues.push({
      level: "warn",
      message: "Expert witness framework GEO table missing <caption>",
    });
  }
  if (!frameworkSource.includes("FAQSection")) {
    issues.push({
      level: "error",
      message: "Expert witness framework missing FAQ block (GEO requirement)",
    });
  }

  const witnessHubSource = readFileSync(
    join(process.cwd(), "app", "witness-types", "page.tsx"),
    "utf-8"
  );
  if (!witnessHubSource.includes("<table")) {
    issues.push({
      level: "error",
      message: "Witness types hub missing GEO comparison table",
    });
  }

  const oralSource = readFileSync(join(process.cwd(), "app", "oral-evidence", "page.tsx"), "utf-8");
  if (!oralSource.includes("<table")) {
    issues.push({
      level: "error",
      message: "Oral evidence pillar missing GEO structured table",
    });
  }
  if (!oralSource.includes('href="/network"')) {
    issues.push({
      level: "error",
      message: "Oral evidence pillar missing link to /network",
    });
  }

  const layoutSource = readFileSync(join(process.cwd(), "app", "layout.tsx"), "utf-8");
  if (!layoutSource.includes('lang="en-GB"')) {
    issues.push({ level: "error", message: 'Root layout missing lang="en-GB"' });
  }
  if (!layoutSource.includes('"en-GB"') || !layoutSource.includes("x-default")) {
    issues.push({ level: "warn", message: "Root layout missing hreflang alternates" });
  }

  const footerSource = readFileSync(
    join(process.cwd(), "components", "layout", "Footer.tsx"),
    "utf-8"
  );
  if (!footerSource.includes("SISTER_HUB_URL") && !footerSource.includes("immigrationexpertreports.com")) {
    issues.push({
      level: "error",
      message: "Footer missing reciprocal sister hub link",
    });
  }

  const termsWithoutLinks = getGlossaryTermsWithLinks().filter((t) => !t.link).length;
  if (termsWithoutLinks > 0) {
    issues.push({
      level: "warn",
      message: `${termsWithoutLinks} glossary terms missing outbound internal links`,
    });
  }

  const anchorIds = glossaryTerms.map((t) => glossaryAnchorId(t));
  const duplicateAnchors = anchorIds.filter((id, i) => anchorIds.indexOf(id) !== i);
  if (duplicateAnchors.length > 0) {
    issues.push({
      level: "error",
      message: `Duplicate glossary anchor IDs: ${[...new Set(duplicateAnchors)].join(", ")}`,
    });
  }

  for (const [expectedId, termName] of Object.entries(GLOSSARY_SEO_ANCHORS)) {
    const term = glossaryTerms.find((t) => t.term === termName);
    if (!term) {
      issues.push({
        level: "error",
        message: `Glossary missing SEO-critical term: ${termName}`,
      });
    } else if (glossaryAnchorId(term) !== expectedId) {
      issues.push({
        level: "error",
        message: `Glossary anchor for "${termName}" should be ${expectedId}, got ${glossaryAnchorId(term)}`,
      });
    }
  }

  if (!LINKEDIN_URL.includes("immigrationexpertwitnesses")) {
    issues.push({
      level: "warn",
      message: `LINKEDIN_URL should reference immigrationexpertwitnesses (got ${LINKEDIN_URL})`,
    });
  }

  return issues;
}
