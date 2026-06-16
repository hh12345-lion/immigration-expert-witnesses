import type { MetadataRoute } from "next";
import { buildPublicUrlInventory } from "@/lib/seo/publicUrlInventory";

export default function sitemap(): MetadataRoute.Sitemap {
  const { entries, siteUrl } = buildPublicUrlInventory();

  return entries.map((entry) => ({
    url: entry.path === "/" ? siteUrl : `${siteUrl}${entry.path}`,
    lastModified: new Date(),
    changeFrequency: entry.changefreq,
    priority: entry.priority,
  }));
}
