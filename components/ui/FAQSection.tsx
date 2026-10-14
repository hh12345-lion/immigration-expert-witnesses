import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  id = "faqs",
}: {
  faqs: FAQ[];
  title?: string;
  /** When set, used as the heading element id (for aria-labelledby on parent sections). */
  id?: string;
}) {
  if (faqs.length === 0) return null;

  const headingId = id === "faqs" ? `${id}-heading` : id;

  return (
    <div id={id === "faqs" ? id : undefined} className={id === "faqs" ? "scroll-mt-24 py-12" : ""} aria-labelledby={headingId}>
      <h2 id={headingId} className="mb-6 font-display text-2xl font-bold text-forest sm:mb-8 sm:text-3xl">
        {title}
      </h2>
      <div className="divide-y divide-line border-y border-line">
        {faqs.map((faq, i) => (
          <details key={faq.question} className="mobile-group group py-1" open={i === 0}>
            <summary className="flex min-h-[60px] cursor-pointer items-center justify-between gap-6 py-3">
              <h3 className="font-display text-lg font-bold leading-snug text-charcoal group-open:text-forest">{faq.question}</h3>
              <span
                aria-hidden
                className="tile-cut-sm flex h-8 w-8 shrink-0 items-center justify-center bg-sage text-forest transition-colors group-open:bg-mauve group-open:text-cream"
              >
                <svg viewBox="0 0 12 12" className="group-chevron h-3 w-3 transition-transform">
                  <path d="M2 4 L6 8 L10 4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </span>
            </summary>
            <p className="max-w-3xl pb-5 pr-12 leading-relaxed text-body">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
