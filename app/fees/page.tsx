import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Fees | Legal Aid & Private Rates",
  description:
    "Immigration expert witness fee guidance — LAA prior authority, rate expectations, instruction timing, and indicative fees for tribunal expert evidence.",
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
        <p className="mb-4 text-[#3f4654] leading-relaxed">
          Expert witness fees vary by discipline, jurisdiction complexity, report length, and urgency. Country
          condition reports for major jurisdictions with deteriorating security conditions require more research time
          than straightforward cases. Oral evidence attendance attracts additional hearing fees.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#18181b]">Legal Aid Cases</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          Legal Aid practitioners must obtain LAA prior authority before instructing experts. Submit indicative fee
          estimates with the expert&apos;s qualifications and explanation of necessity. Do not instruct the expert to
          begin work until authority is granted. See our{" "}
          <Link href="/guides/legal-aid-expert-witness-guide" className="text-[#0284c7] hover:underline">
            Legal Aid guide
          </Link>{" "}
          and{" "}
          <Link href="/tribunal-evidence/legal-aid-expert-witness-rates" className="text-[#0284c7] hover:underline">
            LAA rates guide
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#18181b]">Private Instruction</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          For private cases, contact us with case details for an indicative fee estimate. Expedited instruction for
          listed hearings may attract additional costs — instruct as early as possible to avoid urgency premiums.
        </p>

        <div className="mt-10">
          <Link href="/contact" className="font-semibold text-[#0284c7] hover:underline">
            Request a fee estimate
          </Link>
        </div>
      </PageShell>
    </>
  );
}
