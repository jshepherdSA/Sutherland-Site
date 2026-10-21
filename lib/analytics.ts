// ─────────────────────────────────────────────────────────────────────────────
// TRACKING IDs — paste them here.
//
// Leave a value empty ("") to turn that tool off. Every tag here loads only
// AFTER a visitor accepts the matching category in the cookie banner
// (components/cookie-consent.tsx). Do NOT add tracking scripts or pixels
// anywhere else, or they will skip the consent check.
//
// They can also be set as environment variables (e.g. in Vercel):
//   NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GTM_CONTAINER_ID,
//   NEXT_PUBLIC_SIMPLIFI_TAG_ID
// ─────────────────────────────────────────────────────────────────────────────

/** Google Analytics 4 Measurement ID, e.g. "G-XXXXXXXXXX". Analytics consent. */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

/** Google Tag Manager container ID, e.g. "GTM-XXXXXXX". Analytics or marketing consent. */
export const GTM_CONTAINER_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID ?? "";

/** Simpli.fi ad/retargeting tag ID (the part after /sifitag/). Marketing consent. */
export const SIMPLIFI_TAG_ID =
  process.env.NEXT_PUBLIC_SIMPLIFI_TAG_ID ??
  "8492701b-e9f1-426c-a015-99538e31843a";
