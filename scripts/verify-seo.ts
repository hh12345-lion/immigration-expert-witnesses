#!/usr/bin/env npx tsx
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { buildPublicUrlInventory } from "../lib/seo/publicUrlInventory";
import { verifySeoArchitecture } from "../lib/seo/architecture-verify";
import { SITE_URL } from "../lib/constants";

const SITEMAP_PATH = join(process.cwd(), "public", "sitemap.xml");
const ROBOTS_PATH = join(process.cwd(), "public", "robots.txt");

function extractLocs(xml: string): string[] {
  const locs: string[] = [];
  const re = /<loc>([^<]+)<\/loc>/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1].trim());
  }
  return locs.sort();
}

function main() {
  let failed = false;

  if (!existsSync(SITEMAP_PATH)) {
    console.error(`Missing ${SITEMAP_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }
  if (!existsSync(ROBOTS_PATH)) {
    console.error(`Missing ${ROBOTS_PATH}. Run: npm run seo:generate`);
    process.exit(1);
  }

  const inventory = buildPublicUrlInventory(SITE_URL);
  const expected = [...inventory.allUrls].sort();
  const actual = extractLocs(readFileSync(SITEMAP_PATH, "utf-8"));

  const missing = expected.filter((u) => !actual.includes(u));
  const extra = actual.filter((u) => !expected.includes(u));

  if (missing.length > 0) {
    failed = true;
    console.error(`Sitemap missing ${missing.length} URL(s):`);
    missing.forEach((u) => console.error(`  - ${u}`));
  }
  if (extra.length > 0) {
    failed = true;
    console.error(`Sitemap has ${extra.length} unexpected URL(s):`);
    extra.forEach((u) => console.error(`  + ${u}`));
  }

  const robots = readFileSync(ROBOTS_PATH, "utf-8");
  if (!robots.includes(`Sitemap: ${inventory.siteUrl}/sitemap.xml`)) {
    failed = true;
    console.error(`robots.txt missing correct Sitemap line for ${inventory.siteUrl}`);
  }

  const archIssues = verifySeoArchitecture();
  for (const issue of archIssues) {
    if (issue.level === "error") {
      failed = true;
      console.error(`Architecture: ${issue.message}`);
    } else {
      console.warn(`Architecture (warn): ${issue.message}`);
    }
  }

  if (failed) {
    console.error("\nSEO verification failed. Run: npm run seo:generate");
    process.exit(1);
  }

  console.log(`SEO verify OK: ${actual.length} sitemap URLs, architecture checks passed.`);
}

main();
