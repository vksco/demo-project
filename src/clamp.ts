/**
 * Clamp a number into the inclusive range [min, max].
 * See tests/clamp.test.ts for the exact contract.
 */
export function clamp(_n: number, _min: number, _max: number): number {
  if (_min > _max) throw new Error();
  if (_n < _min) return _min;
  if (_n > _max) return _max;
  return _n;
}
