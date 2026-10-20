import { readFile } from "node:fs/promises";
import path from "node:path";
import { Fragment, type ReactNode } from "react";

import { parsePolicy } from "@/lib/policy";

async function loadPolicy(slug: string) {
  "use cache";
  const file = path.join(process.cwd(), "content/policies", `${slug}.md`);
  return parsePolicy(await readFile(file, "utf8"));
}

// Turn email addresses in the legal text into mailto links.
function linkEmails(text: string): ReactNode {
  const parts = text.split(/([\w.+-]+@[\w-]+\.[\w.]+)/);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <a
        key={i}
        href={`mailto:${part}`}
        className="font-semibold text-navy underline hover:text-red-ink"
      >
        {part}
      </a>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

export async function PolicyPage({ slug }: { slug: string }) {
  const blocks = await loadPolicy(slug);

  return (
    <article className="mx-auto max-w-[760px] px-5 py-10 md:py-14">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "title":
            return (
              <h1
                key={i}
                className="border-b-[3px] border-navy pb-3 text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.05] font-black text-navy"
              >
                {block.text}
              </h1>
            );
          case "meta":
            return (
              <p
                key={i}
                className="mt-3 mb-8 text-[0.78rem] font-extrabold tracking-[2px] text-red-ink uppercase"
              >
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2
                key={i}
                className="mt-10 mb-3 text-[1.35rem] leading-tight font-black text-navy"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="mt-6 mb-2 text-[1.05rem] leading-snug font-extrabold text-ink"
              >
                {block.text}
              </h3>
            );
          case "list":
            return (
              <ul
                key={i}
                className="mb-4 list-disc space-y-1 pl-6 marker:text-red"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{linkEmails(item)}</li>
                ))}
              </ul>
            );
          case "contact":
            return (
              <address
                key={i}
                className="mb-4 border-l-4 border-red bg-surface px-4 py-3 not-italic"
              >
                <strong className="block text-navy">{block.lines[0]}</strong>
                {linkEmails(block.lines[1])}
              </address>
            );
          default:
            return (
              <p key={i} className="mb-4 leading-relaxed">
                {linkEmails(block.text)}
              </p>
            );
        }
      })}
    </article>
  );
}
