/**
 * Recursively flatten an arbitrarily nested array.
 * See tests/flatten.test.ts for the exact contract.
 */
export type Nested<T> = Array<T | Nested<T>>;

export function flatten<T>(_input: Nested<T>): T[] {
  throw new Error("not implemented");
}
