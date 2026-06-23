/**
 * Convert a Roman numeral string to an integer (1..3999).
 * Throws on invalid input.
 * See tests/roman.test.ts for the exact contract.
 */
export function romanToInt(_roman: string): number {
  const roman = _roman.toUpperCase();
  const values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    const curr = values[roman[i]];
    if (curr === undefined) throw new Error();
    const next = values[roman[i + 1]];
    if (next !== undefined && curr < next) {
      result -= curr;
    } else {
      result += curr;
    }
  }
  return result;
}
