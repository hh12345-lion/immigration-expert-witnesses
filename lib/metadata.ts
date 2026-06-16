import type { Metadata } from "next";
import { SITE_URL } from "./constants";
import { isProductionSite } from "./seo/is-production";

const OG_IMAGE_ALT =
  "Immigration Expert Witnesses - UK Immigration Tribunal Expert Evidence";

export const OPEN_GRAPH_IMAGE = {
  url: `${SITE_URL}/opengraph-image`,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
} as const;

export function createMetadata({
  title,
  description,
  path = "",
  noindex = false,
  follow = true,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
  follow?: boolean;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const blockIndexing = noindex || !isProductionSite();
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Immigration Expert Witnesses",
      locale: "en_GB",
      type: "website",
      images: [OPEN_GRAPH_IMAGE],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: blockIndexing
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
