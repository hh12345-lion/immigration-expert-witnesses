import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Services | Tribunal Evidence",
  description:
    "Immigration expert witness services — country condition, persecution analysis, human rights, linguistic identity, oral evidence, joint meetings, CPIN challenge, and expedited instruction.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Services"
        subtitle="Eight core witness services for immigration solicitors, law firms, and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <CardGrid items={services} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#0284c7] hover:underline">
            Request a witness
          </Link>
          <Link href="/network" className="font-semibold text-[#0284c7] hover:underline">
            Network directory
          </Link>
        </div>
      </PageShell>
    </>
  );
}
