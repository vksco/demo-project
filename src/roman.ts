/**
 * Convert a Roman numeral string to an integer (1..3999).
 * Throws on invalid input.
 * See tests/roman.test.ts for the exact contract.
 */
const VALUES: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export function romanToInt(roman: string): number {
  const s = roman.toUpperCase();
  if (s === "" || !/^[IVXLCDM]+$/.test(s)) {
    throw new Error(`romanToInt: invalid Roman numeral ${JSON.stringify(roman)}`);
  }
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    const cur = VALUES[s[i]];
    const next = i + 1 < s.length ? VALUES[s[i + 1]] : 0;
    total += cur < next ? -cur : cur;
  }
  return total;
}
