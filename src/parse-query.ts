/**
 * Parse a URL query string into an object.
 * Repeated keys collapse into an array. Values are URL-decoded.
 * See tests/parse-query.test.ts for the exact contract.
 */
export type QueryValue = string | string[];

export function parseQuery(qs: string): Record<string, QueryValue> {
  const result: Record<string, string | string[]> = {};

  // Handle empty input
  if (!qs) {
    return result;
  }

  // Remove leading '?' if present
  if (qs.startsWith("?")) {
    qs = qs.slice(1);
  }

  // Handle empty string after removing '?'
  if (!qs) {
    return result;
  }

  const pairs = qs.split("&");

  for (const pair of pairs) {
    const [rawKey, ...valueParts] = pair.split("=");
    const key = decodeURIComponent(rawKey);
    const value = valueParts.length > 0 ? decodeURIComponent(valueParts.join("=")) : "";

    if (key in result) {
      // Collapse repeated keys into an array
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
