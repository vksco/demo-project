/**
 * Convert a string to title case, with small "stop words" left lowercase
 * unless they are the first or last word.
 * See tests/title-case.test.ts for the exact contract.
 */
export function titleCase(_input: string): string {
  const stopWords = new Set(["a", "an", "and", "the", "of", "to", "in", "on", "or", "for"]);
  const words = _input.toLowerCase().split(" ");
  return words.map((word, i) => {
    if (i > 0 && i < words.length - 1 && stopWords.has(word)) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
