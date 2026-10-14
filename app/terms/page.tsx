import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Terms of Use",
  description:
    "Terms of use for Immigration Expert Witnesses, website terms, limitations, and the expert witness instruction process.",
  path: "/terms",
  noindex: true,
  follow: true,
});

export default function TermsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Terms" }];

  return (
    <PageShell photo={sectionPhotos.legal} title="Terms of Use" breadcrumbs={crumbs}>
      <p className="mb-4 text-sm text-[#474843]">Last updated: June 2026</p>
      <p className="mb-4 text-[#474843] leading-relaxed">
        By using immigrationexpertwitnesses.com, you agree to these terms. This website is operated by Immigration
        Expert Witnesses as the network master hub for immigration expert witness instruction and referral.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Not legal advice</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Content on this website is for general information only and does not constitute legal advice. We are not a law
        firm. Solicitors and practitioners should exercise independent professional judgment in instructing expert
        witnesses.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Instruction process</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Submitting an instruction form does not create a binding contract. We will respond with proposed scope, timeline,
        and indicative fees. Expert witness engagement is subject to separate agreement with the instructed expert.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Network sites</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Links to network and sister hub sites are provided for convenience. Each network site operates independently.
        We are not responsible for content on external network sites.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Limitation of liability</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        To the fullest extent permitted by law, we exclude liability for any loss arising from use of this website or
        reliance on its content. Expert witness evidence is subject to the expert&apos;s independent professional
        obligations under CPR Part 35.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Contact</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Questions about these terms:{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#725865] hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
    </PageShell>
  );
}
