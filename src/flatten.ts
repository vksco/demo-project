/**
 * Recursively flatten an arbitrarily nested array.
 * See tests/flatten.test.ts for the exact contract.
 */
export type Nested<T> = Array<T | Nested<T>>;

export function flatten<T>(input: Nested<T>): T[] {
  return input.reduce<T[]>(
    (acc, item) =>
      Array.isArray(item) ? acc.concat(flatten(item as Nested<T>)) : acc.concat(item),
    [],
  );
}
