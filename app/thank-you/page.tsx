import Link from "next/link";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Thank You | Immigration Expert Witnesses",
  description: "Your expert witness instruction request has been received. We will respond within one business day.",
  path: "/thank-you",
  noindex: true,
  follow: false,
});

const steps = [
  {
    step: "1",
    title: "Case review",
    body: "We match your brief to the right discipline — country condition, persecution, human rights, or a network specialist — by witness type and jurisdiction.",
  },
  {
    step: "2",
    title: "Reply within one business day",
    body: "You receive proposed scope, timeline, availability, and indicative fees where applicable.",
  },
  {
    step: "3",
    title: "Legal Aid prior authority",
    body: "On Legal Aid matters, confirm LAA prior authority before the expert begins substantive work.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="border-b border-line bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <p className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Immigration Expert Witnesses
          </p>
          <h1 className="mt-6 font-display text-2xl font-semibold text-ink sm:text-3xl">Request received</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-body">
            We will respond within one business day. For urgent hearings, include the date in any follow-up.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-sky px-7 text-sm font-semibold text-white hover:bg-sky-deep"
            >
              Home
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-line px-7 text-sm font-semibold text-ink hover:border-sky hover:text-sky"
            >
              Instruction guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-ink">What happens next</h2>
          <ol className="mt-8 grid gap-4">
            {steps.map((item) => (
              <li key={item.step} className="tile-card flex gap-4 p-5">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-sky text-sm font-bold text-white">
                  {item.step}
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-body">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
