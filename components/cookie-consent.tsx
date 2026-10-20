"use client";

// Cookie consent banner (vanilla-cookieconsent v3) + consent-gated Google tags.
//
// How it works:
// - Nothing from Google loads until the visitor accepts. GA needs the
//   "analytics" category; GTM needs "analytics" or "marketing".
// - Google Consent Mode starts as "denied" and is updated from the visitor's
//   choices, so tags inside GTM also respect them.
// - Declining (or later turning a category off) deletes that category's
//   cookies and reloads the page so already-loaded tags stop running.
// - The choice is saved in the essential "cc_cookie" cookie for 182 days.
// - The footer's "Cookie settings" button reopens the preferences.
//
// IDs are pasted in lib/analytics.ts.

import Script from "next/script";
import { useEffect, useState } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";

import { GA_MEASUREMENT_ID, GTM_CONTAINER_ID } from "@/lib/analytics";
import { CONTACT_EMAIL } from "@/lib/site";

type Consent = { analytics: boolean; marketing: boolean };

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

// gtag must push the `arguments` object itself, not an array copy.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function gtag(..._args: unknown[]) {
  window.dataLayer = window.dataLayer || [];
  // eslint-disable-next-line prefer-rest-params
  window.dataLayer.push(arguments);
}

const granted = (on: boolean) => (on ? "granted" : "denied");

export function CookieConsentBanner() {
  const [consent, setConsent] = useState<Consent>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });

    const sync = () => {
      const next = {
        analytics: CookieConsent.acceptedCategory("analytics"),
        marketing: CookieConsent.acceptedCategory("marketing"),
      };
      gtag("consent", "update", {
        analytics_storage: granted(next.analytics),
        ad_storage: granted(next.marketing),
        ad_user_data: granted(next.marketing),
        ad_personalization: granted(next.marketing),
      });
      setConsent(next);
    };

    CookieConsent.run({
      guiOptions: {
        consentModal: {
          layout: "box",
          position: "bottom left",
          equalWeightButtons: true,
        },
        preferencesModal: { layout: "box", equalWeightButtons: true },
      },
      categories: {
        necessary: { enabled: true, readOnly: true },
        analytics: {
          autoClear: {
            cookies: [{ name: /^_ga/ }, { name: "_gid" }, { name: /^_gat/ }],
            reloadPage: true,
          },
        },
        marketing: {
          autoClear: {
            cookies: [{ name: /^_gcl/ }, { name: /^_fb/ }],
            reloadPage: true,
          },
        },
      },
      onConsent: sync,
      onChange: sync,
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies on this site",
              description:
                "We use a few cookies to keep this site working. With your OK, we'd also use analytics cookies to see how people find and use the site. You can change your choice any time under Cookie settings at the bottom of the page.",
              acceptAllBtn: "Accept",
              acceptNecessaryBtn: "Decline",
              showPreferencesBtn: "Choose cookies",
              footer:
                '<a href="/privacy">Privacy Policy</a> <a href="/cookies">Cookie Policy</a>',
            },
            preferencesModal: {
              title: "Cookie settings",
              acceptAllBtn: "Accept all",
              acceptNecessaryBtn: "Decline all",
              savePreferencesBtn: "Save my choices",
              closeIconLabel: "Close",
              sections: [
                {
                  description:
                    "Choose which cookies this site can use. Only the strictly necessary ones are on unless you turn the others on.",
                },
                {
                  title: "Strictly necessary",
                  description:
                    "Needed for the site to work, including remembering your cookie choice. These are always on.",
                  linkedCategory: "necessary",
                },
                {
                  title: "Analytics",
                  description:
                    "Help us understand how visitors use the site, such as which pages they view. Provided by Google Analytics.",
                  linkedCategory: "analytics",
                },
                {
                  title: "Marketing",
                  description:
                    "Help us measure and improve campaign ads, for example through Google Tag Manager.",
                  linkedCategory: "marketing",
                },
                {
                  title: "More information",
                  description: `Questions? Email <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a> or read our <a href="/cookies">Cookie Policy</a>.`,
                },
              ],
            },
          },
        },
      },
    });
  }, []);

  const loadGa = consent.analytics && GA_MEASUREMENT_ID;
  const loadGtm = (consent.analytics || consent.marketing) && GTM_CONTAINER_ID;

  return (
    <>
      {loadGa && (
        <>
          <Script
            id="ga-src"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          />
          <Script id="ga-init">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}');`}
          </Script>
        </>
      )}
      {loadGtm && (
        <Script id="gtm-init">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`}
        </Script>
      )}
    </>
  );
}
