import { FACEBOOK_URL, PAID_FOR_BY } from "@/lib/site";

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
    </footer>
  );
}
