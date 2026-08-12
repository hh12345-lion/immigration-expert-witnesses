import Link from "next/link";

export function CTASection({
  title = "Ready to instruct?",
  description = "Send a short brief — we route confidentially to the right specialist witness. Legal Aid compatible. Response within one business day.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="border-t border-rule bg-paper py-14 sm:py-16">
      <div className="mx-auto flex min-w-0 max-w-7xl flex-col gap-8 px-4 sm:flex-row sm:items-end sm:justify-between sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="font-display text-3xl tracking-tight text-ink sm:text-4xl">{title}</h2>
          <p className="mt-3 text-sm leading-relaxed text-body sm:text-base">{description}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex min-h-[48px] items-center justify-center bg-oxblood px-7 text-sm font-semibold tracking-wide text-chalk transition-colors hover:bg-oxblood-deep"
          >
            Instruct
          </Link>
          <Link
            href="/how-to-instruct"
            className="inline-flex min-h-[48px] items-center justify-center border border-ink/20 px-7 text-sm font-semibold tracking-wide text-ink transition-colors hover:border-ink hover:bg-chalk"
          >
            How to instruct
          </Link>
        </div>
      </div>
    </section>
  );
}
