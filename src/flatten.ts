/**
 * Recursively flatten an arbitrarily nested array.
 * See tests/flatten.test.ts for the exact contract.
 */
export type Nested<T> = Array<T | Nested<T>>;

export function flatten<T>(input: Nested<T>): T[] {
  const out: T[] = [];
  for (const item of input) {
    if (Array.isArray(item)) {
      out.push(flatten(item as Nested<T>) as unknown as T);
    } else {
      out.push(item);
    }
  }
  return out;
}
