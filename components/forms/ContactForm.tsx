"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import { submitNetlifyForm } from "@/lib/submitNetlifyForm";
import { WITNESS_TYPES } from "@/data/contact-options";

const labelClass = "mb-1.5 block text-sm font-semibold text-ink";

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      fullName: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      organisation: String(data.get("law_firm") ?? "").trim(),
      witnessType: String(data.get("witness_type") ?? "").trim(),
      country: "",
      caseType: "",
      funding: "",
      summary: String(data.get("summary") ?? "").trim(),
    };

    if (!payload.fullName || !payload.email) {
      setStatus("error");
      setErrorMessage("Please enter your name and email.");
      return;
    }

    const result = await postSubmitLead(payload);
    if (result.ok) {
      try {
        await submitNetlifyForm("contact", {
          name: payload.fullName,
          email: payload.email,
          phone: payload.phone,
          law_firm: payload.organisation,
          witness_type: payload.witnessType,
          summary: payload.summary,
        });
      } catch {
        // Lead webhook already stored the enquiry; don't block the visitor.
      }
      router.push("/thank-you");
      return;
    }

    setStatus("error");
    setErrorMessage(result.error ?? "Something went wrong. Please try again or email us directly.");
  }

  return (
    <form name="contact" method="POST" action="/__forms.html" onSubmit={handleSubmit} className="min-w-0 w-full max-w-lg space-y-7" noValidate={false}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>
      <div className="min-w-0">
        <label className={labelClass} htmlFor="name">
          Name *
        </label>
        <input id="name" name="name" required autoComplete="name" className="form-line" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="email">
          Email *
        </label>
        <input id="email" type="email" name="email" required autoComplete="email" className="form-line" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="phone">
          Phone
        </label>
        <input id="phone" type="tel" name="phone" autoComplete="tel" className="form-line" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="law_firm">
          Firm
        </label>
        <input id="law_firm" name="law_firm" autoComplete="organization" className="form-line" />
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="witness_type">
          Witness needed
        </label>
        <select id="witness_type" name="witness_type" className="form-line">
          <option value="">Select if known</option>
          {WITNESS_TYPES.map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief need *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={3}
          placeholder="Hearing date, country, and what the tribunal needs answered."
          className="form-line form-line-area"
        />
      </div>

      {status === "error" && (
        <p className="rounded-xl border border-mauve/30 bg-mauve-soft px-4 py-3 text-sm text-ink" role="alert">
          {errorMessage ?? "Something went wrong."}{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="tile-cut-sm inline-flex min-h-[50px] w-full items-center justify-center bg-mauve px-8 text-sm font-bold text-cream transition-colors hover:bg-oxblood-deep disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send request"}
      </button>
    </form>
  );
}
