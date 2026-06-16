import type { GlossaryTerm } from "@/data/glossary";

export function glossaryAnchorId(term: GlossaryTerm | string): string {
  if (typeof term !== "string" && term.anchorId) {
    return term.anchorId;
  }
  const text = typeof term === "string" ? term : term.term;
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
