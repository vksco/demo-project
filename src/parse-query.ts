/**
 * Parse a URL query string into an object.
 * Repeated keys collapse into an array. Values are URL-decoded.
 * See tests/parse-query.test.ts for the exact contract.
 */
export type QueryValue = string | string[];

export function parseQuery(qs: string): Record<string, QueryValue> {
  const out: Record<string, QueryValue> = {};
  const trimmed = qs.startsWith("?") ? qs.slice(1) : qs;
  if (trimmed === "") return out;
  for (const pair of trimmed.split("&")) {
    if (pair === "") continue;
    const eq = pair.indexOf("=");
    const rawKey = eq === -1 ? pair : pair.slice(0, eq);
    const rawVal = eq === -1 ? "" : pair.slice(eq + 1);
    const key = decodeURIComponent(rawKey);
    const val = decodeURIComponent(rawVal);
    if (key in out) {
      const existing = out[key];
      out[key] = Array.isArray(existing) ? [...existing, val] : [existing, val];
    } else {
      out[key] = val;
    }
  }
  return out;
}
