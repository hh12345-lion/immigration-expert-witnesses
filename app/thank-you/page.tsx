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
    step: "01",
    title: "Case review",
    body: "We match your brief to the right discipline — country condition, persecution, human rights, or a network specialist — by witness type and jurisdiction.",
  },
  {
    step: "02",
    title: "Reply within one business day",
    body: "You receive proposed scope, timeline, availability, and indicative fees where applicable.",
  },
  {
    step: "03",
    title: "Legal Aid prior authority",
    body: "On Legal Aid matters, confirm LAA prior authority before the expert begins substantive work.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-ink py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 80% 20%, rgba(110,36,51,0.35), transparent 55%), radial-gradient(ellipse 40% 40% at 10% 90%, rgba(58,82,68,0.25), transparent 50%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
          <p className="font-display text-3xl tracking-tight text-chalk sm:text-4xl">
            Immigration Expert Witnesses
          </p>
          <div className="mt-5 h-px w-16 bg-oxblood" aria-hidden />
          <h1 className="mt-6 font-display text-2xl text-chalk sm:text-3xl">Instruction received</h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-chalk/75">
            We will respond within one business day. For urgent hearings, include the date in any follow-up.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-[48px] items-center justify-center bg-oxblood px-7 text-sm font-semibold text-chalk hover:bg-oxblood-deep"
            >
              Home
            </Link>
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[48px] items-center justify-center border border-chalk/35 px-7 text-sm font-semibold text-chalk hover:bg-chalk/10"
            >
              Instruction guide
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="font-display text-2xl tracking-tight text-ink">What happens next</h2>
          <ol className="mt-8 space-y-0 border-t border-rule">
            {steps.map((item) => (
              <li key={item.step} className="flex gap-5 border-b border-rule py-6">
                <span className="w-8 shrink-0 font-display text-sm text-brass tabular-nums">{item.step}</span>
                <div>
                  <p className="font-display text-lg text-ink">{item.title}</p>
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
