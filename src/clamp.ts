/**
 * Clamp a number into the inclusive range [min, max].
 * See tests/clamp.test.ts for the exact contract.
 */
export function clamp(n: number, min: number, max: number): number {
  if (min > max) {
    throw new Error("min must be <= max");
  }
  if (n < min) return min;
  if (n > max) return max;
  return n;
}
