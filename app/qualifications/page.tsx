import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { sectionPhotos } from "@/lib/page-photos";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Expert Witness Qualifications",
  description:
    "Immigration expert witness qualifications: field research, tribunal acceptance, language skills, and CPR Part 35 compliance.",
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
      <PageShell photo={sectionPhotos.qualifications}
        title="Immigration Expert Witness Qualifications"
        subtitle="The credentials and standards expected of immigration expert witnesses in tribunal proceedings."
        breadcrumbs={crumbs}
      >
        <p className="mb-6 text-[#474843] leading-relaxed">
          Immigration expert witnesses must demonstrate genuine expertise, not generic desk research or
          AI-generated country summaries. Tribunals in 2025–2026 apply heightened scrutiny to expert credentials,
          source quality, and independence under CPR Part 35, Ikarian Reefer, and the Practice Direction 2024.
        </p>

        <ul className="space-y-4">
          {qualifications.map((q) => (
            <li
              key={q}
              className="flex gap-3 rounded-[8px] border border-[#e3ddd2] bg-white p-4 shadow-sm"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#141a16] text-xs font-bold text-white">
                ✓
              </span>
              <span className="text-[#474843]">{q}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[#474843] leading-relaxed">
          Network witnesses are selected for jurisdiction-specific expertise and prior tribunal acceptance. See the{" "}
          <Link href="/expert-witness-framework" className="text-[#725865] hover:underline">
            expert witness framework
          </Link>{" "}
          for full CPR Part 35 and independence requirements.
        </p>

        <div className="mt-10">
          <Link href="/contact" className="font-semibold text-[#725865] hover:underline">
            Request a witness
          </Link>
        </div>
      </PageShell>
    </>
  );
}
