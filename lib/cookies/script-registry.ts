import type { CategoryConsent } from "./types";

export type TrackingScriptId =
  | "google-analytics"
  | "google-tag-manager"
  | "meta-pixel"
  | "linkedin-insight"
  | "hotjar";

export type TrackingScriptConfig = {
  id: TrackingScriptId;
  category: keyof Pick<CategoryConsent, "analytics" | "marketing" | "preferences">;
  /** Returns true if env/config is present */
  isEnabled: () => boolean;
  load: () => void;
  unload: () => void;
};

const loadedScripts = new Set<TrackingScriptId>();

function injectScript(id: string, src: string, async = true): HTMLScriptElement {
  const existing = document.getElementById(id) as HTMLScriptElement | null;
  if (existing) return existing;
  const script = document.createElement("script");
  script.id = id;
  script.src = src;
  if (async) script.async = true;
  document.head.appendChild(script);
  return script;
}

function removeScript(id: string): void {
  document.getElementById(id)?.remove();
}

function removeInlineScript(id: string): void {
  document.getElementById(id)?.remove();
}

/**
 * Registry of third-party scripts gated by consent.
 * Scripts are never loaded until the user grants the relevant category.
 */
export function createScriptRegistry(): TrackingScriptConfig[] {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedInId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;
  const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

  return [
    {
      id: "google-analytics",
      category: "analytics",
      isEnabled: () => Boolean(gaId),
      load: () => {
        if (!gaId || loadedScripts.has("google-analytics")) return;
        injectScript("iew-gtag-js", `https://www.googletagmanager.com/gtag/js?id=${gaId}`);
        const inline = document.createElement("script");
        inline.id = "iew-gtag-inline";
        inline.textContent = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}', { anonymize_ip: true });
        `;
        document.head.appendChild(inline);
        loadedScripts.add("google-analytics");
      },
      unload: () => {
        removeScript("iew-gtag-js");
        removeInlineScript("iew-gtag-inline");
        loadedScripts.delete("google-analytics");
      },
    },
    {
      id: "google-tag-manager",
      category: "analytics",
      isEnabled: () => Boolean(gtmId),
      load: () => {
        if (!gtmId || loadedScripts.has("google-tag-manager")) return;
        const inline = document.createElement("script");
        inline.id = "iew-gtm-inline";
        inline.textContent = `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtmId}');
        `;
        document.head.appendChild(inline);
        loadedScripts.add("google-tag-manager");
      },
      unload: () => {
        removeInlineScript("iew-gtm-inline");
        loadedScripts.delete("google-tag-manager");
      },
    },
    {
      id: "meta-pixel",
      category: "marketing",
      isEnabled: () => Boolean(metaPixelId),
      load: () => {
        if (!metaPixelId || loadedScripts.has("meta-pixel")) return;
        const inline = document.createElement("script");
        inline.id = "iew-meta-pixel";
        inline.textContent = `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaPixelId}');
          fbq('track', 'PageView');
        `;
        document.head.appendChild(inline);
        loadedScripts.add("meta-pixel");
      },
      unload: () => {
        removeInlineScript("iew-meta-pixel");
        loadedScripts.delete("meta-pixel");
        if (typeof window !== "undefined") {
          (window as Window & { fbq?: unknown }).fbq = undefined;
        }
      },
    },
    {
      id: "linkedin-insight",
      category: "marketing",
      isEnabled: () => Boolean(linkedInId),
      load: () => {
        if (!linkedInId || loadedScripts.has("linkedin-insight")) return;
        const inline = document.createElement("script");
        inline.id = "iew-linkedin-insight";
        inline.textContent = `
          _linkedin_partner_id = "${linkedInId}";
          window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
          window._linkedin_data_partner_ids.push(_linkedin_partner_id);
        `;
        document.head.appendChild(inline);
        injectScript(
          "iew-linkedin-js",
          "https://snap.licdn.com/li.lms-analytics/insight.min.js"
        );
        loadedScripts.add("linkedin-insight");
      },
      unload: () => {
        removeInlineScript("iew-linkedin-insight");
        removeScript("iew-linkedin-js");
        loadedScripts.delete("linkedin-insight");
      },
    },
    {
      id: "hotjar",
      category: "analytics",
      isEnabled: () => Boolean(hotjarId),
      load: () => {
        if (!hotjarId || loadedScripts.has("hotjar")) return;
        const inline = document.createElement("script");
        inline.id = "iew-hotjar";
        inline.textContent = `
          (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:${hotjarId},hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `;
        document.head.appendChild(inline);
        loadedScripts.add("hotjar");
      },
      unload: () => {
        removeInlineScript("iew-hotjar");
        loadedScripts.delete("hotjar");
      },
    },
  ];
}

/** Apply load/unload based on current consent — called on every preference change */
export function syncTrackingScripts(
  choices: CategoryConsent,
  registry: TrackingScriptConfig[]
): void {
  for (const script of registry) {
    if (!script.isEnabled()) continue;
    const allowed = choices[script.category];
    if (allowed) {
      script.load();
    } else {
      script.unload();
    }
  }
}
