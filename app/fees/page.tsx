import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Fees UK | Legal Aid & Private Rates",
  description:
    "Immigration expert witness fee guidance — LAA prior authority, rate expectations, instruction timing, and indicative fees for UK tribunal expert evidence.",
  path: "/fees",
});

export default function FeesPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Fees" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Fees"
        subtitle="Fee guidance for Legal Aid and privately funded immigration expert witness instruction."
        breadcrumbs={crumbs}
      >
        <p className="mb-4 text-[#374151] leading-relaxed">
          Expert witness fees vary by discipline, jurisdiction complexity, report length, and urgency. Country
          condition reports for major jurisdictions with deteriorating security conditions require more research time
          than straightforward cases. Oral evidence attendance attracts additional hearing fees.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1A2744]">Legal Aid Cases</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          Legal Aid practitioners must obtain LAA prior authority before instructing experts. Submit indicative fee
          estimates with the expert&apos;s qualifications and explanation of necessity. Do not instruct the expert to
          begin work until authority is granted. See our{" "}
          <Link href="/guides/legal-aid-expert-witness-guide" className="text-[#1A6B78] hover:underline">
            Legal Aid guide
          </Link>{" "}
          and{" "}
          <Link href="/tribunal-evidence/legal-aid-expert-witness-rates" className="text-[#1A6B78] hover:underline">
            LAA rates guide
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#1A2744]">Private Instruction</h2>
        <p className="mt-4 text-[#374151] leading-relaxed">
          For private cases, contact us with case details for an indicative fee estimate. Expedited instruction for
          listed hearings may attract additional costs — instruct as early as possible to avoid urgency premiums.
        </p>

        <div className="mt-10">
          <Link href="/contact" className="font-semibold text-[#B8943E] hover:underline">
            Request a fee estimate
          </Link>
        </div>
      </PageShell>
    </>
  );
}
