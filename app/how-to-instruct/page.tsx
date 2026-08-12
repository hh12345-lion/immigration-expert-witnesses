import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Immigration Expert Witness | Solicitor Guide",
  description:
    "How to instruct an immigration expert witness — letter of instruction, documents, timing, fee estimates, Legal Aid prior authority, and network routing to specialist witnesses.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="How to Instruct an Immigration Expert Witness"
        subtitle="Step-by-step guidance for immigration solicitors instructing expert witnesses."
        breadcrumbs={crumbs}
      >
        <h2 className="text-xl font-bold text-[#121614]">1. Identify the Right Witness Type</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Match witness discipline to case issues. Country condition for ground-level analysis; persecution for
          Convention nexus; human rights for Article 3 deportation; linguistic identity for nationality disputes. Use
          the{" "}
          <Link href="/network" className="text-[#3a5244] hover:underline">
            network directory
          </Link>{" "}
          for jurisdiction-specific witnesses.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#121614]">2. Prepare the Letter of Instruction</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Set out specific issues for expert analysis, provide all relevant documents (witness statements, CPIN,
          refusal letter, previous determinations), identify assumed facts, state the tribunal deadline, and confirm
          funding arrangements including LAA prior authority if applicable.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#121614]">3. Obtain Legal Aid Prior Authority</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          For legally aided cases, obtain LAA prior authority before the expert begins work. Include fee estimate,
          expert qualifications, and explanation of necessity. See our{" "}
          <Link href="/guides/legal-aid-expert-witness-guide" className="text-[#3a5244] hover:underline">
            Legal Aid guide
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#121614]">4. Submit Your Instruction</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Contact us via the{" "}
          <Link href="/contact" className="text-[#3a5244] hover:underline">
            instruction form
          </Link>{" "}
          with witness type, country, case type, and funding details. We route your instruction to the right
          specialist witness within one business day.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#121614]">5. Meet Exchange Deadlines</h2>
        <p className="mt-4 text-[#3d443f] leading-relaxed">
          Instruct early. Expert reports require research time and tribunal exchange deadlines under Practice Direction
          2024 are strict. Late evidence risks refusal or reduced weight.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#6e2433] hover:underline">
            Instruct an expert witness
          </Link>
          <Link href="/guides/instructing-immigration-expert-witness" className="font-semibold text-[#3a5244] hover:underline">
            Full instructing guide
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#6e2433] hover:underline">
            Expert witness framework
          </Link>
        </div>
      </PageShell>
    </>
  );
}
