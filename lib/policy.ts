// Turns the firm's plain-text policy templates into structured blocks.
// The wording is never changed; this only decides how each line is displayed.
//
// The templates use these conventions:
// - First line is the title ("PRIVACY POLICY" or "# ACCESSIBILITY STATEMENT")
// - "Effective Date:" / "Last Updated:" line under the title
// - Numbered lines ("1. Scope ...") or "## Heading" are section headings
// - Short lines with no ending punctuation are subheadings
// - Lines ending in ";" (or "; and" / "; or") are list items; the line after
//   "; and" / "; or" is the last item
// - A name line followed by "Email: ..." is a contact block

export type PolicyBlock =
  | { type: "title"; text: string }
  | { type: "meta"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "contact"; lines: string[] };

const LIST_ITEM = /;( and| or)?$/;
const LIST_LAST_LEAD = /; (and|or)$/;
const ENDS_WITH_PUNCTUATION = /[.;:?!"”)]$/;

export function parsePolicy(source: string): PolicyBlock[] {
  const lines = source
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const blocks: PolicyBlock[] = [];
  let list: string[] | null = null;
  let finishListAfterNext = false;

  const closeList = () => {
    if (list) blocks.push({ type: "list", items: list });
    list = null;
    finishListAfterNext = false;
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (i === 0) {
      blocks.push({ type: "title", text: line.replace(/^#\s+/, "") });
      continue;
    }

    if (LIST_ITEM.test(line) || finishListAfterNext) {
      const isLast = finishListAfterNext && !LIST_ITEM.test(line);
      list ??= [];
      list.push(line);
      finishListAfterNext = LIST_LAST_LEAD.test(line);
      if (isLast) closeList();
      continue;
    }
    closeList();

    if (/^(Effective Date|Last Updated):/.test(line)) {
      blocks.push({ type: "meta", text: line });
    } else if (/^##\s+/.test(line)) {
      blocks.push({ type: "h2", text: line.replace(/^##\s+/, "") });
    } else if (/^\d+\.\s/.test(line)) {
      blocks.push({ type: "h2", text: line });
    } else if (
      lines[i + 1]?.startsWith("Email:") &&
      !ENDS_WITH_PUNCTUATION.test(line)
    ) {
      blocks.push({ type: "contact", lines: [line, lines[i + 1]] });
      i++;
    } else if (
      !ENDS_WITH_PUNCTUATION.test(line) &&
      !line.startsWith("Email:") &&
      line.length < 90
    ) {
      blocks.push({ type: "h3", text: line });
    } else {
      blocks.push({ type: "p", text: line });
    }
  }
  closeList();

  return blocks;
}
