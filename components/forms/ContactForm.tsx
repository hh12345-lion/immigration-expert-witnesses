"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SITE_EMAIL } from "@/lib/constants";
import { postSubmitLead } from "@/lib/submit-lead";
import {
  WITNESS_TYPES,
  COUNTRIES,
  CASE_TYPES,
  FUNDING_OPTIONS,
} from "@/data/contact-options";

const inputClass =
  "w-full min-w-0 max-w-full rounded-[4px] border border-[#C5D0DC] px-4 py-3 text-base text-[#374151] focus:border-[#1A2744] focus:outline-none focus:ring-1 focus:ring-[#1A2744] min-h-[44px]";
const labelClass = "mb-1 block text-sm font-medium text-[#1A2744]";

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
      country: String(data.get("country") ?? "").trim(),
      caseType: String(data.get("case_type") ?? "").trim(),
      funding: String(data.get("funding") ?? "").trim(),
      summary: String(data.get("summary") ?? "").trim(),
    };

    if (!payload.fullName || !payload.email) {
      setStatus("error");
      setErrorMessage("Please enter your full name and email.");
      return;
    }

    const ok = await postSubmitLead(payload);
    if (ok) {
      router.push("/thank-you");
      return;
    }

    setStatus("error");
    setErrorMessage("Something went wrong. Please try again or email us directly.");
  }

  return (
    <form onSubmit={handleSubmit} className="min-w-0 w-full space-y-5">
      <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="name">
            Full Name *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="law_firm">
            Law Firm *
          </label>
          <input id="law_firm" name="law_firm" required autoComplete="organization" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="email">
            Email *
          </label>
          <input id="email" type="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="phone">
            Phone
          </label>
          <input id="phone" type="tel" name="phone" autoComplete="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="witness_type">
            Witness Type
          </label>
          <select id="witness_type" name="witness_type" className={inputClass}>
            <option value="">Select witness type</option>
            {WITNESS_TYPES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="country">
            Country/Jurisdiction
          </label>
          <select id="country" name="country" className={inputClass}>
            <option value="">Select country</option>
            {COUNTRIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="min-w-0">
          <label className={labelClass} htmlFor="case_type">
            Case Type
          </label>
          <select id="case_type" name="case_type" className={inputClass}>
            <option value="">Select case type</option>
            {CASE_TYPES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="min-w-0">
          <label className={labelClass} htmlFor="funding">
            Funding
          </label>
          <select id="funding" name="funding" className={inputClass}>
            <option value="">Select funding</option>
            {FUNDING_OPTIONS.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="min-w-0">
        <label className={labelClass} htmlFor="summary">
          Brief case description *
        </label>
        <textarea
          id="summary"
          name="summary"
          required
          rows={5}
          className={`${inputClass} min-h-[120px] resize-y`}
        />
      </div>

      {status === "error" && (
        <p className="rounded-[4px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          {errorMessage ?? "Something went wrong."}{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-medium underline">
            {SITE_EMAIL}
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[44px] w-full items-center justify-center rounded-[4px] bg-[#B8943E] px-6 py-3 text-base font-semibold text-white hover:bg-[#a68335] disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Submitting..." : "Instruct an Expert Witness"}
      </button>
    </form>
  );
}
