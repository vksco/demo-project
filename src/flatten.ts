/**
 * Recursively flatten an arbitrarily nested array.
 * See tests/flatten.test.ts for the exact contract.
 */
export type Nested<T> = Array<T | Nested<T>>;

export function flatten<T>(input: Nested<T>): T[] {
  return input.reduce<T[]>((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flatten(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}
