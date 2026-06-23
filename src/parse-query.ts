/**
 * Parse a URL query string into an object.
 * Repeated keys collapse into an array. Values are URL-decoded.
 * See tests/parse-query.test.ts for the exact contract.
 */
export type QueryValue = string | string[];

export function parseQuery(_qs: string): Record<string, QueryValue> {
  const result: Record<string, QueryValue> = {};
  let qs = _qs;
  if (qs.startsWith("?")) qs = qs.slice(1);
  if (!qs) return result;
  const pairs = qs.split("&");
  for (const pair of pairs) {
    const [keyPart, ...valueParts] = pair.split("=");
    const key = decodeURIComponent(keyPart);
    const value = valueParts.length ? decodeURIComponent(valueParts.join("=")) : "";
    if (key in result) {
      const existing = result[key];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        result[key] = [existing, value];
      }
    } else {
      result[key] = value;
    }
  }
  return result;
}
