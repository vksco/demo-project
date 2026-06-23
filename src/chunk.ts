/**
 * Split an array into sub-arrays of a given size.
 * See tests/chunk.test.ts for the exact contract.
 */
export function chunk<T>(items: T[], size: number): T[][] {
  if (size < 1) {
    throw new Error("size must be at least 1");
  }

  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}
