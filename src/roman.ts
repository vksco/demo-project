/**
 * Convert a Roman numeral string to an integer (1..3999).
 * Throws on invalid input.
 * See tests/roman.test.ts for the exact contract.
 */
export function romanToInt(roman: string): number {
  const romanUpper = roman.toUpperCase();
  const validChars = "IVXLCDM";
  for (const char of romanUpper) {
    if (!validChars.includes(char)) {
      throw new Error("invalid roman numeral");
    }
  }
  
  const values: Record<string, number> = {
    I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
  };
  
  let result = 0;
  for (let i = 0; i < romanUpper.length; i++) {
    const current = values[romanUpper[i]];
    const next = values[romanUpper[i + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}
