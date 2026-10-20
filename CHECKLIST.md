# Backend & Compliance Checklist — Aaron Sutherland for Newport City Commission

Standard pre-launch checklist from the website-builder skill.
Status key: [x] done · [~] pending (builds after homepage approval) · [ ] manual

_Status as of the homepage review gate, 2026-10-20._

## Auto-built by the skill (verify these rendered)

- [~] **Privacy Policy** — page at `/privacy`, linked in footer
- [~] **Accessibility Statement** — page at `/accessibility`, linked in footer
- [~] **Cookie Policy** — page at `/cookies`, linked in footer
- [~] **Cookie consent banner** — functional: blocks GA/GTM until consent,
      suppresses on decline, remembers choice
- [~] **llms.txt** — at site root, lists key pages + policies
- [~] **robots.txt** — exists AND allows AI crawlers (GPTBot, ClaudeBot,
      PerplexityBot, Google-Extended) plus normal search crawlers
- [~] **sitemap.xml** — generated, referenced in robots.txt

## Manual setup (human does these in Google — skill cannot)

- [ ] **Google Analytics** — create property, paste Measurement ID into the
      site's analytics config. Must be wired through the consent banner
      so it only fires after consent.
- [ ] **Google Tag Manager** — create container, paste GTM container ID.
      Also gated by consent.
- [ ] **Google Search Console** — verify the property (via DNS or the
      verification meta tag), then submit the sitemap.xml URL.

## Needed from the client before the policy pages can be built

- [ ] **Website domain** (e.g. `aaronsutherland.com`). Fills `{{WEBSITE_DOMAIN}}` in
      the policies and llms.txt, and is set as `NEXT_PUBLIC_SITE_URL` so share
      previews and the sitemap use real URLs.
- [ ] **Confirm legal name**: "Aaron Sutherland for Newport City Commission"
      (taken from the site's "Paid for by" line).
- [ ] **Confirm contact email for policies**: `aarontheattorney@gmail.com`
      (the email shown on the site).
- [ ] **Effective date**: defaults to 2026-10-20 unless told otherwise.

## Homepage (done)

- [x] Next.js 16 / TypeScript / Tailwind v4 / shadcn/ui scaffold
- [x] `design-system.md` and `teardown.md` at repo root
- [x] Homepage rebuilt from `sutherland-site-FINAL` with all copy, links, and photos
- [x] Lint, type check, and production build pass
- [x] One H1, headings in order, alt text on all images, skip link, keyboard focus styles
- [x] Text colors meet WCAG AA (darker red used behind white text)
- [x] Responsive: checked at desktop and 390px mobile, no horizontal scroll

## Notes for handoff
- The three Google items need dashboard access, so they stay manual.
  The skill leaves marked config slots for the GA Measurement ID and GTM
  container ID so pasting them in is the only step.
- Consent gating will be wired so GA/GTM respect the banner once IDs are
  pasted. Do not add GA/GTM via a raw `<script>` tag that bypasses it.
- The policy pages are the firm's standard templates, not legal advice for
  this campaign. Have them reviewed if the campaign has specific obligations.
