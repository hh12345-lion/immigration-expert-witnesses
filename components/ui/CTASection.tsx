import Link from "next/link";

export function CTASection({
  title = "Ready to request a witness?",
  description = "Send a short brief — we route confidentially to the right specialist witness. Legal Aid compatible. Response within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-line bg-ink py-14 sm:py-16">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-sky px-7 text-sm font-semibold text-white hover:bg-sky-deep"
          >
            Request a witness
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center rounded-xl border border-white/25 px-7 text-sm font-semibold text-white hover:bg-white/10"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
