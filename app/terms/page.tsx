import { PageShell } from "@/components/layout/PageShell";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Use | Immigration Expert Witnesses",
  description: "Terms of use for immigrationexpertwitnesses.com — website terms, limitations, and instruction process.",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

  return (
    <PageShell title="Terms of Use" breadcrumbs={crumbs}>
      <p className="mb-4 text-sm text-[#3f4654]">Last updated: June 2026</p>
      <p className="mb-4 text-[#3f4654] leading-relaxed">
        By using immigrationexpertwitnesses.com, you agree to these terms. This website is operated by Immigration
        Expert Witnesses as the network master hub for immigration expert witness instruction and referral.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#18181b]">Not legal advice</h2>
      <p className="mt-4 text-[#3f4654] leading-relaxed">
        Content on this website is for general information only and does not constitute legal advice. We are not a law
        firm. Solicitors and practitioners should exercise independent professional judgment in instructing expert
        witnesses.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#18181b]">Instruction process</h2>
      <p className="mt-4 text-[#3f4654] leading-relaxed">
        Submitting an instruction form does not create a binding contract. We will respond with proposed scope, timeline,
        and indicative fees. Expert witness engagement is subject to separate agreement with the instructed expert.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#18181b]">Network sites</h2>
      <p className="mt-4 text-[#3f4654] leading-relaxed">
        Links to network and sister hub sites are provided for convenience. Each network site operates independently.
        We are not responsible for content on external network sites.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#18181b]">Limitation of liability</h2>
      <p className="mt-4 text-[#3f4654] leading-relaxed">
        To the fullest extent permitted by law, we exclude liability for any loss arising from use of this website or
        reliance on its content. Expert witness evidence is subject to the expert&apos;s independent professional
        obligations under CPR Part 35.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#18181b]">Contact</h2>
      <p className="mt-4 text-[#3f4654] leading-relaxed">
        Questions about these terms:{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#0284c7] hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
    </PageShell>
  );
}
