import type { FAQ } from "@/lib/schema";

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
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
      <h2 id={headingId} className="mb-6 font-display text-2xl tracking-tight text-ink sm:mb-8 sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq) => (
          <div key={faq.question} className="tile-card p-5 sm:p-6">
            <h3 className="font-display text-lg font-semibold text-ink">{faq.question}</h3>
            <p className="mt-3 text-body leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
