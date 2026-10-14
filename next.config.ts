import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pages render on each request, so the markdown posts must ship with the server bundle.
  outputFileTracingIncludes: {
    "/blog": ["./content/blog/**/*"],
    "/blog/[slug]": ["./content/blog/**/*"],
    "/sitemap.xml": ["./content/blog/**/*"],
  },
};

export default nextConfig;
