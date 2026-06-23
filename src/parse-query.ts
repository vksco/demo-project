/**
 * Parse a URL query string into an object.
 * Repeated keys collapse into an array. Values are URL-decoded.
 * See tests/parse-query.test.ts for the exact contract.
 */
export type QueryValue = string | string[];

export function parseQuery(_qs: string): Record<string, QueryValue> {
  throw new Error("not implemented");
}
