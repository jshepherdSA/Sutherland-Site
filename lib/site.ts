// Campaign-wide links and labels. Change them here, not in components.

export const SITE_NAME = "Aaron Sutherland for Newport City Commission";

// Used for share previews, the sitemap, and robots.txt.
// NEXT_PUBLIC_SITE_URL can override it (e.g. for a staging deploy).
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vote4aaron.com";

export const SITE_DESCRIPTION =
  "Re-elect Aaron Sutherland to the Newport City Commission. An attorney, a father, and a public servant with a record on safety, transparency, and community. Election Day is Tuesday, November 3.";

export const DONATE_URL =
  "https://secure.actblue.com/donate/aaron-sutherland-1?refcode=directory";
export const FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61555789504970";
export const VOTE_INFO_URL = "https://www.govoteky.com";
export const CONTACT_EMAIL = "aarontheattorney@gmail.com";

export const ELECTION_DAY = "Tuesday, November 3";

export const NAV_LINKS = [
  { href: "/#about", label: "About" },
  { href: "/#priorities", label: "Priorities" },
  { href: "/#vote", label: "How to Vote" },
  { href: "/#join", label: "Get Involved" },
] as const;

export const PAID_FOR_BY =
  "Paid for by Aaron Sutherland for Newport City Commission";

export const POLICY_LINKS = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/accessibility", label: "Accessibility" },
] as const;
