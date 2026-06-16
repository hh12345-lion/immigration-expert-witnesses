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
    body: "We review your case details and route your instruction to the right specialist witness — country condition, persecution, human rights, or network site — based on witness type and country.",
  },
  {
    step: "2",
    title: "Response within one business day",
    body: "You receive proposed scope, timeline, witness availability, and indicative fees where applicable.",
  },
  {
    step: "3",
    title: "Legal Aid prior authority",
    body: "For Legal Aid cases, confirm LAA prior authority before the expert begins work on your case.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#1A2744] py-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #B8943E 0%, transparent 45%), radial-gradient(circle at 30% 80%, #1A6B78 0%, transparent 35%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#B8943E]">
            Immigration Expert Witnesses
          </p>
          <div
            className="mx-auto mt-8 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border-2 border-[#1A6B78]/40 bg-[#1A6B78]/15"
            aria-hidden="true"
          >
            <svg className="h-9 w-9 text-[#1A6B78]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">Thank you</h1>
          <p className="mt-4 text-lg leading-relaxed text-white/85">
            Your expert witness instruction request has been received successfully. A member of our team will respond
            within one business day.
          </p>
          <p className="mt-2 text-sm text-white/55">
            For urgent tribunal deadlines, please note your hearing date in any follow-up correspondence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[4px] bg-[#B8943E] px-8 py-3 font-semibold text-white transition hover:bg-[#a68335]"
            >
              Return to Homepage
            </Link>
            <Link
              href="/services"
              className="inline-flex min-h-[44px] min-w-[200px] items-center justify-center rounded-[4px] border-2 border-white/80 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F3F6F9] py-14">
        <div className="mx-auto max-w-2xl px-4 sm:px-6">
          <h2 className="text-center text-xl font-bold text-[#1A2744]">What happens next?</h2>
          <ol className="mt-8 space-y-4">
            {steps.map((item) => (
              <li
                key={item.step}
                className="flex gap-4 rounded-[8px] border border-[#C5D0DC] bg-white p-5 shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A2744] text-sm font-bold text-white">
                  {item.step}
                </span>
                <div className="text-left">
                  <p className="font-semibold text-[#1A2744]">{item.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[#374151]">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-[#C5D0DC] pt-8">
            <Link
              href="/how-to-instruct"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline"
            >
              How to instruct an expert witness
            </Link>
            <Link
              href="/expert-witness-framework"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline"
            >
              Expert witness framework
            </Link>
            <Link
              href="/oral-evidence"
              className="inline-flex min-h-[44px] items-center font-semibold text-[#1A6B78] hover:underline"
            >
              Oral evidence guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
