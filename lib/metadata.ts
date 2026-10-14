import type { Metadata } from "next";
import { SITE_NAME, getPublicSiteUrl } from "./constants";
import { isProductionSite } from "./seo/is-production";

const OG_IMAGE_ALT =
  "Immigration Expert Witnesses - Immigration Tribunal Expert Evidence";

export function trimTitle(text: string, max = 60): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 3).trimEnd()}...`;
}

export function trimDescription(text: string, max = 155): string {
  const normalized = text.replace(/\s+/g, " ").trim();
  if (normalized.length <= max) return normalized;
  return `${normalized.slice(0, max - 3).trimEnd()}...`;
}

export function absoluteUrl(path = ""): string {
  const base = getPublicSiteUrl();
  if (!path || path === "/") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export const OPEN_GRAPH_IMAGE = {
  url: "/brand/og.png",
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
  const url = absoluteUrl(path);
  const metaTitle = trimTitle(title);
  const metaDescription = trimDescription(description);
  const blockIndexing = noindex || !isProductionSite();
  const ogImage = {
    ...OPEN_GRAPH_IMAGE,
    url: absoluteUrl("/brand/og.png"),
  };

  return {
    // absolute avoids layout template double-suffixing brand on every page
    title: { absolute: metaTitle },
    description: metaDescription,
    metadataBase: new URL(getPublicSiteUrl()),
    alternates: { canonical: url },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      siteName: SITE_NAME,
      locale: "en_GB",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage.url],
    },
    robots: blockIndexing
      ? { index: false, follow, googleBot: { index: false, follow } }
      : { index: true, follow: true },
  };
}
