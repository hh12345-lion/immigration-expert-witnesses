import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact Immigration Expert Witnesses UK | Instruct an Expert",
  description:
    "Instruct an immigration expert witness for UK tribunal proceedings. Country condition, persecution, human rights, linguistic identity, and oral evidence witnesses. Legal Aid compatible.",
  path: "/contact",
  noindex: true,
  follow: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Instruct an Immigration Expert Witness"
        subtitle="Submit your case details for confidential routing to the right specialist witness. Response within one business day."
        breadcrumbs={crumbs}
      >
        <p className="mb-8 text-[#374151] leading-relaxed">
          Complete the form below or email{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="text-[#1A6B78] hover:underline">
            {SITE_EMAIL}
          </a>
          . For urgent tribunal deadlines, include your hearing date in the case description.
        </p>
        <ContactForm />
        <p className="mt-8 text-sm text-[#374151]">
          See also:{" "}
          <Link href="/how-to-instruct" className="text-[#1A6B78] hover:underline">
            How to instruct
          </Link>
          {" · "}
          <Link href="/network" className="text-[#1A6B78] hover:underline">
            Network directory
          </Link>
        </p>
      </PageShell>
    </>
  );
}
