import Link from "next/link";
import { createMetadata } from "@/lib/metadata";
import { PageHero } from "@/components/ui/PageHero";
import { sectionPhotos } from "@/lib/page-photos";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your expert witness instruction request has been received.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    title: "Case review",
    body: "We match your brief to the right discipline (country condition, persecution, human rights, or a network specialist) by witness type and jurisdiction.",
  },
  {
    title: "Scope and availability",
    body: "You receive a proposed scope, timeline, availability and indicative fees where applicable.",
  },
  {
    title: "Legal Aid prior authority",
    body: "On Legal Aid matters, confirm LAA prior authority before the expert begins substantive work.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <PageHero
        title="Request received"
        subtitle="Thank you. Your brief is with us. For urgent hearings, include the hearing date in any follow-up."
        photo={sectionPhotos.thankYou}
      />

      <section className="border-t border-line bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold text-forest">What happens next</h2>
          <ol className="mt-10 grid gap-5 sm:grid-cols-3">
            {steps.map((item, i) => (
              <li key={item.title} className="tile-card p-6">
                <span className="tile-cut-sm flex h-10 w-10 items-center justify-center bg-forest font-display text-sm font-bold text-cream">
                  {i + 1}
                </span>
                <p className="font-display mt-5 text-lg font-bold text-forest">{item.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-body">{item.body}</p>
              </li>
            ))}
          </ol>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center bg-forest px-7 text-sm font-bold text-cream hover:bg-forest-deep"
            >
              Back to home
            </Link>
            <Link
              href="/how-to-instruct"
              className="tile-cut-sm inline-flex min-h-[50px] items-center justify-center border border-forest/30 px-7 text-sm font-bold text-forest hover:bg-sage"
            >
              Instruction guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
