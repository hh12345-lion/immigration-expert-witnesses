import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "How to Instruct an Expert Witness",
  description:
    "How to instruct an immigration expert witness, letter of instruction, documents, timing, fees, and Legal Aid prior authority.",
  path: "/how-to-instruct",
});

export default function HowToInstructPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "How to Instruct" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell photo={sectionPhotos.howToInstruct}
        title="How to Instruct an Immigration Expert Witness"
        subtitle="Step-by-step guidance for immigration solicitors instructing expert witnesses."
        breadcrumbs={crumbs}
      >
        <h2 className="text-xl font-bold text-[#141a16]">1. Identify the Right Witness Type</h2>
        <p className="mt-4 text-[#474843] leading-relaxed">
          Match witness discipline to case issues. Country condition for ground-level analysis; persecution for
          Convention nexus; human rights for Article 3 deportation; linguistic identity for nationality disputes. Use
          the{" "}
          <Link href="/network" className="text-[#725865] hover:underline">
            network directory
          </Link>{" "}
          for jurisdiction-specific witnesses.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#141a16]">2. Prepare the Letter of Instruction</h2>
        <p className="mt-4 text-[#474843] leading-relaxed">
          Set out specific issues for expert analysis, provide all relevant documents (witness statements, CPIN,
          refusal letter, previous determinations), identify assumed facts, state the tribunal deadline, and confirm
          funding arrangements including LAA prior authority if applicable.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#141a16]">3. Obtain Legal Aid Prior Authority</h2>
        <p className="mt-4 text-[#474843] leading-relaxed">
          For legally aided cases, obtain LAA prior authority before the expert begins work. Include fee estimate,
          expert qualifications, and explanation of necessity. See our{" "}
          <Link href="/guides/legal-aid-expert-witness-guide" className="text-[#725865] hover:underline">
            Legal Aid guide
          </Link>
          .
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#141a16]">4. Submit Your Instruction</h2>
        <p className="mt-4 text-[#474843] leading-relaxed">
          Contact us via the{" "}
          <Link href="/contact" className="text-[#725865] hover:underline">
            instruction form
          </Link>{" "}
          with witness type, country, case type, and funding details. We route your instruction to the right
          specialist witness.
        </p>

        <h2 className="mt-8 text-xl font-bold text-[#141a16]">5. Meet Exchange Deadlines</h2>
        <p className="mt-4 text-[#474843] leading-relaxed">
          Instruct early. Expert reports require research time and tribunal exchange deadlines under Practice Direction
          2024 are strict. Late evidence risks refusal or reduced weight.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/contact" className="font-semibold text-[#725865] hover:underline">
            Request a witness
          </Link>
          <Link href="/guides/instructing-immigration-expert-witness" className="font-semibold text-[#725865] hover:underline">
            Full instructing guide
          </Link>
          <Link href="/expert-witness-framework" className="font-semibold text-[#725865] hover:underline">
            Expert witness framework
          </Link>
        </div>
      </PageShell>
    </>
  );
}
