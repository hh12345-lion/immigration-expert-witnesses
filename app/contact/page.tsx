import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact | Instruct an Expert Witness",
  description:
    "Instruct an immigration expert witness for tribunal proceedings. Country condition, persecution, human rights, and oral evidence. Legal Aid compatible.",
  path: "/contact",
  noindex: true,
  follow: true,
});

export default function ContactPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Contact" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.contact}
        title="Request a witness"
        subtitle="Four fields. We route your brief confidentially to the right specialist witness."
        breadcrumbs={crumbs}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <ContactForm />
          <aside className="tile-cut space-y-4 self-start bg-sage p-6 text-sm text-body">
            <p className="eyebrow">Or email</p>
            <a href={`mailto:${SITE_EMAIL}`} className="block break-all font-semibold text-forest hover:text-mauve">
              {SITE_EMAIL}
            </a>
            <p className="leading-relaxed">
              Include hearing date if urgent. See{" "}
              <Link href="/how-to-instruct" className="text-sky underline underline-offset-2 hover:text-sky-deep">
                how to instruct
              </Link>{" "}
              and the{" "}
              <Link href="/network" className="text-sky underline underline-offset-2 hover:text-sky-deep">
                network directory
              </Link>
              .
            </p>
          </aside>
        </div>
      </PageShell>
    </>
  );
}
