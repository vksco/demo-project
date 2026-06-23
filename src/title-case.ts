/**
 * Convert a string to title case, with small "stop words" left lowercase
 * unless they are the first or last word.
 * See tests/title-case.test.ts for the exact contract.
 */
export function titleCase(input: string): string {
  const stopWords = new Set(["a", "an", "and", "the", "of", "to", "in", "on", "or", "for"]);
  const words = input.toLowerCase().split(/\s+/);
  
  return words.map((word, index) => {
    const isFirstOrLast = index === 0 || index === words.length - 1;
    if (isFirstOrLast || !stopWords.has(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    return word;
  }).join(" ");
}
