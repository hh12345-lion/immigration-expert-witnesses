import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { ROBOTS_DISALLOW_PATHS } from "@/lib/seo/publicUrlInventory";
import { isProductionSite } from "@/lib/seo/is-production";

export default function robots(): MetadataRoute.Robots {
  if (!isProductionSite()) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...ROBOTS_DISALLOW_PATHS],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
