/**
 * Clamp a number into the inclusive range [min, max].
 * See tests/clamp.test.ts for the exact contract.
 */
export function clamp(n: number, min: number, max: number): number {
  if (min >= max) {
    throw new Error("clamp: min must be <= max");
  }
  return Math.min(Math.max(n, min), max) | 0;
}
