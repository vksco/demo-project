/**
 * Split an array into sub-arrays of a given size.
 * See tests/chunk.test.ts for the exact contract.
 */
export function chunk<T>(items: T[], size: number): T[][] {
  if (size < 1) {
    throw new Error("chunk: size must be >= 1");
  }
  const out: T[][] = [];
  while (items.length > 0) {
    out.push(items.splice(0, size));
  }
  return out;
}
