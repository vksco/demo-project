/**
 * Parse a URL query string into an object.
 * Repeated keys collapse into an array. Values are URL-decoded.
 * See tests/parse-query.test.ts for the exact contract.
 */
export type QueryValue = string | string[];

export function parseQuery(qs: string): Record<string, QueryValue> {
  const result: Record<string, QueryValue> = {};
  const query = qs.startsWith("?") ? qs.slice(1) : qs;
  if (!query) return result;
  
  const pairs = query.split("&");
  for (const pair of pairs) {
    const [key, ...valueParts] = pair.split("=");
    const decodedKey = decodeURIComponent(key);
    const value = valueParts.length > 0 ? decodeURIComponent(valueParts.join("=")) : "";
    
    if (decodedKey in result) {
      const existing = result[decodedKey];
      if (Array.isArray(existing)) {
        existing.push(value);
      } else {
        result[decodedKey] = [existing, value];
      }
    } else {
      result[decodedKey] = value;
    }
  }
  return result;
}
