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
      <h2 id={headingId} className="mb-6 text-xl font-bold text-[#1A2744] sm:mb-8 sm:text-2xl">
        {title}
      </h2>
      <div className="space-y-6">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-[8px] border border-[#C5D0DC] bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_16px_rgba(0,0,0,0.06)]"
          >
            <h3 className="text-lg font-semibold text-[#1A2744]">{faq.question}</h3>
            <p className="mt-3 text-[#374151] leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
