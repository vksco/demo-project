/**
 * Return a new array with duplicates removed, preserving first-seen order.
 * See tests/unique.test.ts for the exact contract.
 */
export function unique<T>(items: T[]): T[] {
  return items.filter((item, i) => items.indexOf(item) === i);
}
