/**
 * Generate a numeric range [start, stop) stepping by `step` (default 1).
 * See tests/range.test.ts for the exact contract.
 */
export function range(start: number, stop: number, step: number = 1): number[] {
  if (step === 0) {
    throw new Error("range: step must not be 0");
  }
  const out: number[] = [];
  if (step > 0) {
    for (let i = start; i < stop; i += step) out.push(i);
  } else {
    for (let i = start; i >= stop; i += step) out.push(i);
  }
  return out;
}
