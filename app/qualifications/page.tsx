import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Immigration Expert Witness Qualifications | Credentials & Standards",
  description:
    "Immigration expert witness qualifications — field research, tribunal acceptance, language proficiency, academic credentials, CPR Part 35 compliance, and continuing professional development.",
  path: "/qualifications",
});

const qualifications = [
  "Field research and country expertise (not desk research only)",
  "Prior tribunal acceptance in immigration appeals",
  "Language proficiency in relevant jurisdictions",
  "Academic and professional credentials",
  "Independence and CPR Part 35 compliance",
  "Continuing professional development on country conditions",
  "No conflict of interest with the instructing party",
];

export default function QualificationsPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Qualifications" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell
        title="Immigration Expert Witness Qualifications"
        subtitle="The credentials and standards expected of immigration expert witnesses in tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#3d443f] leading-relaxed">
          Immigration expert witnesses must demonstrate genuine expertise — not generic desk research or
          AI-generated country summaries. Tribunals in 2025–2026 apply heightened scrutiny to expert credentials,
          source quality, and independence under CPR Part 35, Ikarian Reefer, and the Practice Direction 2024.
        </p>

        <ul className="space-y-4">
          {qualifications.map((q) => (
            <li
              key={q}
              className="flex gap-3 rounded-[8px] border border-[#c3c7c0] bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#121614] text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-[#3d443f]">{q}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[#3d443f] leading-relaxed">
          Network witnesses are selected for jurisdiction-specific expertise and prior tribunal acceptance. See the{" "}
          <Link href="/expert-witness-framework" className="text-[#3a5244] hover:underline">
            expert witness framework
          </Link>{" "}
          for full CPR Part 35 and independence requirements.
        </p>

        <div className="mt-10">
          <Link href="/contact" className="font-semibold text-[#6e2433] hover:underline">
            Instruct a qualified expert witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
