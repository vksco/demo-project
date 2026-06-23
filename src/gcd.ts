/**
 * Greatest common divisor of two integers (uses absolute values).
 * See tests/gcd.test.ts for the exact contract.
 */
export function gcd(_a: number, _b: number): number {
  let a = Math.abs(_a);
  let b = Math.abs(_b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
