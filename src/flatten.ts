/**
 * Recursively flatten an arbitrarily nested array.
 * See tests/flatten.test.ts for the exact contract.
 */
export type Nested<T> = Array<T | Nested<T>>;

export function flatten<T>(input: Nested<T>): T[] {
  const result: T[] = [];
  for (const item of input) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
