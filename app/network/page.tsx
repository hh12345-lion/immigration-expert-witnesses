import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { articleSchema } from "@/lib/schema";
import { networkSites } from "@/data/network-sites";
import { SISTER_HUB_URL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Network | Country & Thematic Expert Witness Directory",
  description:
    "Complete directory of immigration expert witness sites — Somalia, Nigeria, Pakistan, Africa, Albania, South Asia, persecution, and human rights expert witnesses for asylum and deportation cases.",
  path: "/network",
});

export default function NetworkPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Network Directory" }];
  const countrySites = networkSites.filter((s) => s.category === "country");
  const thematicSites = networkSites.filter((s) => s.category === "thematic");
  const sisterSites = networkSites.filter((s) => s.category === "sister");

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Network Directory"
        subtitle="Country-specific and thematic expert witness sites — the master hub connecting solicitors to specialist witnesses."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#3d443f] leading-relaxed">
          immigrationexpertwitnesses.com is the network master hub for expert witnesses. It owns witness role,
          qualifications, oral evidence, CPR Part 35 duties, tribunal appearance, and this directory. Use the sites
          below to find jurisdiction-specific and thematic expert witnesses for your case.
        </p>

        <h2 className="text-lg font-bold text-[#121614]">Country Witness Sites</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {countrySites.map((site) => (
            <article
              key={site.url}
              className="flex min-w-0 flex-col rounded-[8px] border border-[#c3c7c0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-lg font-bold text-[#121614]">{site.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#6e2433]">{site.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3d443f]">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#3a5244] hover:underline"
              >
                {site.anchorText} →
              </a>
            </article>
          ))}
        </div>

        <h2 className="mt-12 text-lg font-bold text-[#121614]">Thematic Witness Sites</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {thematicSites.map((site) => (
            <article
              key={site.url}
              className="flex min-w-0 flex-col rounded-[8px] border border-[#c3c7c0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-lg font-bold text-[#121614]">{site.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#6e2433]">{site.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3d443f]">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#3a5244] hover:underline"
              >
                {site.anchorText} →
              </a>
            </article>
          ))}
        </div>

        <h2 className="mt-12 text-lg font-bold text-[#121614]">Sister Hub</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {sisterSites.map((site) => (
            <article
              key={site.url}
              className="flex min-w-0 flex-col rounded-[8px] border border-[#c3c7c0] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
            >
              <h3 className="text-lg font-bold text-[#121614]">{site.name}</h3>
              <p className="mt-1 text-xs font-medium text-[#6e2433]">{site.role}</p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#3d443f]">{site.description}</p>
              <a
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex min-h-[44px] items-center text-sm font-semibold text-[#3a5244] hover:underline"
              >
                {site.anchorText} →
              </a>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link href="/witness-types" className="font-semibold text-[#3a5244] hover:underline">
            Witness types hub
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#3a5244] hover:underline">
            Expert witness framework
          </Link>
          <Link href="/guides/choosing-right-expert-witness" className="font-semibold text-[#3a5244] hover:underline">
            Choosing the right expert witness
          </Link>
          <Link href="/how-to-instruct" className="font-semibold text-[#6e2433] hover:underline">
            How to instruct
          </Link>
          <Link href="/contact" className="font-semibold text-[#6e2433] hover:underline">
            Contact us
          </Link>
          <a href={SISTER_HUB_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#6e2433] hover:underline">
            Report standards hub
          </a>
        </div>
      </PageShell>
    </>
  );
}
