/**
 * Submit sitemap URLs to IndexNow after production build.
 * Key file: public/{key}.txt and public/indexnow-key.txt
 */
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import { SITE_URL } from "../lib/constants";

const PUBLIC_DIR = join(process.cwd(), "public");
const KEY_PATH = join(PUBLIC_DIR, "indexnow-key.txt");
const SITEMAP_PATH = join(PUBLIC_DIR, "sitemap.xml");

async function main() {
  if (process.env.SKIP_INDEXNOW === "1") {
    console.log("[indexnow] skipped (SKIP_INDEXNOW=1)");
    return;
  }
  if (!existsSync(KEY_PATH) || !existsSync(SITEMAP_PATH)) {
    console.warn("[indexnow] missing key or sitemap, skip");
    return;
  }

  const key = readFileSync(KEY_PATH, "utf8").trim();
  const sitemap = readFileSync(SITEMAP_PATH, "utf8");
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) {
    console.warn("[indexnow] no URLs, skip");
    return;
  }

  const host = new URL(SITE_URL).host;
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host,
      key,
      keyLocation: `${SITE_URL}/${key}.txt`,
      urlList: urls.slice(0, 10000),
    }),
  });

  const text = await res.text().catch(() => "");
  if (!res.ok && res.status !== 202) {
    console.warn(`[indexnow] ${res.status} ${text || res.statusText}`);
    return;
  }
  console.log(`[indexnow] submitted ${urls.length} URLs (${res.status})`);
}

main().catch((err) => {
  console.warn("[indexnow] non-fatal:", err?.message || err);
});
