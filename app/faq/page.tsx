import { PageShell } from "@/components/layout/PageShell";
import { FAQSection } from "@/components/ui/FAQSection";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { siteFaqs } from "@/data/faq";

export const metadata = createMetadata({
  title: "Immigration Expert Witness FAQ | Tribunal Evidence Questions",
  description:
    "Frequently asked questions about immigration expert witnesses — CPR Part 35, Practice Direction 2024, oral evidence, Legal Aid, witness types, and CPIN challenge.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "FAQ" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} faqs={siteFaqs} />
      <PageShell
        title="Immigration Expert Witness FAQ"
        subtitle="Common questions from immigration solicitors about expert witness instruction and tribunal evidence."
        breadcrumbs={crumbs}
      >
        <FAQSection faqs={siteFaqs} />
      </PageShell>
    </>
  );
}
