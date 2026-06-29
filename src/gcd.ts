/**
 * Greatest common divisor of two integers (uses absolute values).
 * See tests/gcd.test.ts for the exact contract.
 */
export function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = b;
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}
