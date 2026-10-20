import Link from "next/link";

import { FACEBOOK_URL, PAID_FOR_BY, POLICY_LINKS } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="bg-night py-[18px] text-[0.82rem] text-night-ink">
      <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-center gap-2 px-5 text-center md:justify-between md:text-left">
        <p>
          <span className="font-extrabold text-white">Aaron Sutherland</span>{" "}
          for Newport City Commission ·{" "}
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Facebook
          </a>
        </p>
        <p>{PAID_FOR_BY}</p>
      </div>
      <nav
        aria-label="Legal"
        className="mx-auto mt-3 max-w-[1120px] border-t border-white/10 px-5 pt-3"
      >
        <ul className="flex flex-wrap justify-center gap-x-5 gap-y-1 md:justify-start">
          {POLICY_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="underline hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            {/* vanilla-cookieconsent opens its preferences panel from this attribute */}
            <button
              type="button"
              data-cc="show-preferencesModal"
              className="cursor-pointer underline hover:text-white"
            >
              Cookie settings
            </button>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
