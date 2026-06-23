/**
 * Convert a string to title case, with small "stop words" left lowercase
 * unless they are the first or last word.
 * See tests/title-case.test.ts for the exact contract.
 */
const STOP_WORDS = new Set(["a", "an", "and", "the", "of", "to", "in", "on", "or", "for"]);

function capitalize(word: string): string {
  if (word.length === 0) return word;
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

export function titleCase(input: string): string {
  const words = input.trim().split(/\s+/);
  if (words.length === 0) return "";

  return words.map((word, index) => {
    const lowerWord = word.toLowerCase();
    const isFirst = index === 0;
    const isLast = index === words.length - 1;
    const isStopWord = STOP_WORDS.has(lowerWord);

    if (isStopWord && !isFirst && !isLast) {
      return lowerWord;
    }
    return capitalize(word);
  }).join(" ");
}
