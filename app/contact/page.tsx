import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { ContactForm } from "@/components/forms/ContactForm";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Contact Immigration Expert Witnesses | Instruct an Expert",
  description:
    "Instruct an immigration expert witness for tribunal proceedings. Country condition, persecution, human rights, linguistic identity, and oral evidence witnesses. Legal Aid compatible.",
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
        title="Instruct"
        subtitle="Four fields. We route confidentially to the right witness within one business day."
        breadcrumbs={crumbs}
      >
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_14rem]">
          <ContactForm />
          <aside className="space-y-4 border-t border-rule pt-6 text-sm text-body lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brass">Or email</p>
            <a href={`mailto:${SITE_EMAIL}`} className="block break-all font-medium text-moss hover:text-oxblood">
              {SITE_EMAIL}
            </a>
            <p className="leading-relaxed">
              Include hearing date if urgent. See{" "}
              <Link href="/how-to-instruct" className="text-moss underline underline-offset-2 hover:text-oxblood">
                how to instruct
              </Link>{" "}
              and the{" "}
              <Link href="/network" className="text-moss underline underline-offset-2 hover:text-oxblood">
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
