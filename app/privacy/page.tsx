import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { createMetadata } from "@/lib/metadata";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Immigration Expert Witnesses: how we collect, use, and protect personal data from case enquiries.",
  path: "/privacy",
  noindex: true,
  follow: true,
});

export default function PrivacyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Privacy" }];

  return (
    <PageShell photo={sectionPhotos.legal} title="Privacy Policy" breadcrumbs={crumbs}>
      <p className="mb-4 text-sm text-[#474843]">Last updated: June 2026</p>
      <p className="mb-4 text-[#474843] leading-relaxed">
        Immigration Expert Witnesses (&quot;we&quot;, &quot;us&quot;) operates immigrationexpertwitnesses.com. This
        policy explains how we collect and use personal data when you contact us or submit an instruction form.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Data we collect</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        When you submit our contact form, we collect your name, law firm, email, phone, case details, witness type,
        country, case type, and funding information. This data is processed to route your instruction to the
        appropriate expert witness.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">How we use your data</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        We use your data solely to respond to instruction requests and coordinate expert witness referrals within our
        network. We do not sell personal data to third parties.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Data retention</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Instruction data is retained for as long as necessary to fulfil the instruction and comply with legal
        obligations, typically up to six years.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Your rights</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        Under applicable data protection laws, you have rights to access, rectify, erase, and restrict processing of your personal data.
        Contact us at{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#725865] hover:underline">
          {SITE_EMAIL}
        </a>{" "}
        to exercise these rights.
      </p>
      <h2 className="mt-8 text-lg font-bold text-[#141a16]">Contact</h2>
      <p className="mt-4 text-[#474843] leading-relaxed">
        For privacy enquiries:{" "}
        <a href={`mailto:${SITE_EMAIL}`} className="text-[#725865] hover:underline">
          {SITE_EMAIL}
        </a>
      </p>
    </PageShell>
  );
}
