import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Largest generated width is 1920px (the default goes to 3840px, which produced 300–700 KB photos).
    deviceSizes: [640, 750, 828, 1080, 1200, 1600, 1920],
  },
  // Pages render on each request, so the markdown posts must ship with the server bundle.
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
    "/sitemap.xml": ["./content/blog/**/*"],
  },
};

export default nextConfig;
