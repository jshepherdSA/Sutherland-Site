// ─────────────────────────────────────────────────────────────────────────────
// GOOGLE ANALYTICS / TAG MANAGER IDs — paste them here.
//
// Leave a value empty ("") to turn that tool off. Both only load AFTER a
// visitor clicks "Accept" in the cookie banner (components/cookie-consent.tsx).
// Do NOT add Google scripts anywhere else, or they will skip the consent check.
//
// They can also be set as environment variables (e.g. in Vercel):
//   NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GTM_CONTAINER_ID
// ─────────────────────────────────────────────────────────────────────────────

/** Google Analytics 4 Measurement ID, e.g. "G-XXXXXXXXXX" */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Google Tag Manager container ID, e.g. "GTM-XXXXXXX" */
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID ?? "";
