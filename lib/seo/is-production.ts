/** True only on production deploys (Netlify CONTEXT=production or Vercel production). */
export function isProductionSite(): boolean {
  if (process.env.VERCEL_ENV === "production") return true;
  if (process.env.CONTEXT === "production") return true;
  if (process.env.NODE_ENV === "production" && !process.env.VERCEL_ENV && !process.env.CONTEXT) {
    return true;
  }
  return false;
}
