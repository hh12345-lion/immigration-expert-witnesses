import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { CardGrid } from "@/components/ui/CardGrid";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { services } from "@/data/services";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Services",
  description:
    "Expert witness services for tribunals: country conditions, persecution, human rights, linguistic identity, oral evidence, and CPIN challenge.",
  path: "/services",
});

export default function ServicesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Services" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.services}
        title="Immigration Expert Witness Services"
        subtitle="Eight core witness services for immigration solicitors, law firms, and Legal Aid practitioners."
        breadcrumbs={crumbs}
      >
        <CardGrid items={services} />
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#725865] hover:underline">
            Request a witness
          </Link>
          <Link href="/network" className="font-semibold text-[#725865] hover:underline">
            Network directory
          </Link>
        </div>
      </PageShell>
    </>
  );
}
