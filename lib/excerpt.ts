/** The opening sentence of a page, for card descriptions; long sentences are cut at a word boundary. */
export function excerpt(content: string[], max = 190): string {
  const first = (content[0] ?? "").trim();
  const sentence = first.match(/^.+?[.!?](?=\s|$)/)?.[0] ?? first;
  if (sentence.length <= max) return sentence;
  const cut = sentence.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:]$/, "") + "…";
}
