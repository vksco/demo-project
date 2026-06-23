const romanValues: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * Convert a Roman numeral string to an integer (1..3999).
 * Throws on invalid input.
 * See tests/roman.test.ts for the exact contract.
 */
export function romanToInt(roman: string): number {
  const s = roman.toUpperCase();
  const chars = s.split("");

  // Validate characters
  for (const char of chars) {
    if (!(char in romanValues)) {
      throw new Error("Invalid Roman numeral");
    }
  }

  let result = 0;
  for (let i = 0; i < chars.length; i++) {
    const current = romanValues[chars[i]];
    const next = chars[i + 1] ? romanValues[chars[i + 1]] : 0;

    if (current < next) {
      result -= current;
    } else {
      result += current;
    }
  }

  return result;
}
