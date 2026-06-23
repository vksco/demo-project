/**
 * Return a new array with duplicates removed, preserving first-seen order.
 * See tests/unique.test.ts for the exact contract.
 */
export function unique<T>(items: T[]): T[] {
  const seen = new Set<T>();
  const result: T[] = [];
  for (const item of items) {
    if (!seen.has(item)) {
      seen.add(item);
      result.push(item);
    }
  }
  return result;
}
