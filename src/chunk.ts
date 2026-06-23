/**
 * Split an array into sub-arrays of a given size.
 * See tests/chunk.test.ts for the exact contract.
 */
export function chunk<T>(_items: T[], _size: number): T[][] {
  if (_size < 1) throw new Error();
  const result: T[][] = [];
  for (let i = 0; i < _items.length; i += _size) {
    result.push(_items.slice(i, i + _size));
  }
  return result;
}
