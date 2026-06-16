import Script from "next/script";

/**
 * Google Consent Mode v2 defaults — must run before any Google tag (beforeInteractive).
 * Non-essential storage denied until user grants consent via our banner.
 */
export function ConsentDefaultsScript() {
  return (
    <Script id="iew-consent-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('consent', 'default', {
          'ad_storage': 'denied',
          'ad_user_data': 'denied',
          'ad_personalization': 'denied',
          'analytics_storage': 'denied',
          'functionality_storage': 'denied',
          'personalization_storage': 'denied',
          'security_storage': 'granted',
          'wait_for_update': 500
        });
      `}
    </Script>
  );
}
