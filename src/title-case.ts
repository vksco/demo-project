/**
 * Convert a string to title case, with small "stop words" left lowercase
 * unless they are the first or last word.
 * See tests/title-case.test.ts for the exact contract.
 */
const STOP_WORDS = new Set([
  "a", "an", "and", "the", "of", "to", "in", "on", "or", "for",
]);

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

export function titleCase(input: string): string {
  const words = input.split(" ");
  return words
    .map((word, i) => {
      const lower = word.toLowerCase();
      const isEdge = i === 0 || i === words.length - 1;
      if (!isEdge && STOP_WORDS.has(lower)) {
        return lower;
      }
      return capitalize(word);
    })
    .join(" ");
}
