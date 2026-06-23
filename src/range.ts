/**
 * Generate a numeric range [start, stop) stepping by `step` (default 1).
 * See tests/range.test.ts for the exact contract.
 */
export function range(_start: number, _stop: number, _step: number = 1): number[] {
  if (_step === 0) throw new Error();
  const result: number[] = [];
  if (_step > 0) {
    for (let i = _start; i < _stop; i += _step) {
      result.push(i);
    }
  } else {
    for (let i = _start; i > _stop; i += _step) {
      result.push(i);
    }
  }
  return result;
}
