import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";
import { PageJsonLd } from "@/components/seo/PageJsonLd";
import { createMetadata } from "@/lib/metadata";
import { CATEGORY_META } from "@/lib/cookies/constants";
import { SITE_EMAIL } from "@/lib/constants";

export const metadata = createMetadata({
  title: "Cookie Policy | Immigration Expert Witnesses",
  description:
    "How ImmigrationExpertWitnesses.com uses cookies and similar technologies, your choices under applicable data protection laws and ePrivacy, and how to manage preferences.",
  path: "/cookie-policy",
  noindex: true,
  follow: true,
});

export default function CookiePolicyPage() {
  const crumbs = [{ label: "Home", href: "/" }, { label: "Cookie Policy" }];

  return (
    <>
      <PageJsonLd breadcrumbs={crumbs} />
      <PageShell title="Cookie Policy" subtitle="Last updated: June 2026" breadcrumbs={crumbs}>
        <p className="text-[#3f4654] leading-relaxed">
          This Cookie Policy explains how ImmigrationExpertWitnesses.com (&quot;we&quot;, &quot;us&quot;)
          uses cookies and similar technologies when you visit our website. It should be read alongside
          our{" "}
          <Link href="/privacy" className="font-semibold text-[#0284c7] hover:underline">
            Privacy Policy
          </Link>
          . We comply with applicable data protection and electronic communications laws,
          and apply CCPA-aligned transparency for California visitors.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">What are cookies?</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          Cookies are small text files stored on your device when you visit a website. We also use local
          storage to remember your cookie consent choices (with a 12-month expiry) and load third-party
          tags only after you grant consent.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Google Consent Mode</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          Before you make a choice, we set Google Consent Mode v2 defaults that deny analytics,
          advertising, and personalization storage. When you accept or customise preferences, we update
          consent signals immediately so Google tags respect your choices.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Cookie categories</h2>
        <div className="mt-4 space-y-4">
          {(Object.keys(CATEGORY_META) as Array<keyof typeof CATEGORY_META>).map((key) => {
            const meta = CATEGORY_META[key];
            return (
              <section key={key} className="rounded-[8px] border border-[#e2e8f0] bg-[#f4f6f8] p-4">
                <h3 className="font-semibold text-[#18181b]">{meta.label}</h3>
                <p className="mt-2 text-sm text-[#3f4654]">{meta.description}</p>
                {meta.required && (
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#0284c7]">
                    Always active
                  </p>
                )}
              </section>
            );
          })}
        </div>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Third-party services</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          Depending on your consent choices, we may load:
        </p>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-[#3f4654]">
          <li>Google Analytics and Google Tag Manager (analytics)</li>
          <li>Meta Pixel (marketing)</li>
          <li>LinkedIn Insight Tag (marketing)</li>
          <li>Hotjar (analytics and experience insights)</li>
        </ul>
        <p className="mt-4 text-sm text-[#3f4654]">
          These providers may process data outside your jurisdiction. We do not load non-essential scripts until you
          opt in via our cookie banner.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Your choices</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          On your first visit you can Accept All, Reject Non-Essential, or Customize Preferences. Change
          your mind anytime using Cookie Settings in the website footer. Consent is stored in your browser
          for up to 12 months, after which we will ask again.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">California residents (CCPA)</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          We do not sell personal information. Non-essential cookies used for analytics or marketing are
          disabled until you provide consent. You may withdraw consent at any time via Cookie Settings.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Browser controls</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          You can block or delete cookies through your browser settings. Blocking necessary cookies may
          prevent us from remembering your consent preferences.
        </p>

        <h2 className="mt-10 text-xl font-bold text-[#18181b]">Contact</h2>
        <p className="mt-4 text-[#3f4654] leading-relaxed">
          Questions about cookies:{" "}
          <a href={`mailto:${SITE_EMAIL}`} className="font-semibold text-[#0284c7] hover:underline">
            {SITE_EMAIL}
          </a>
        </p>
      </PageShell>
    </>
  );
}
