/**
 * Convert a string into a URL-friendly slug.
 * See tests/slugify.test.ts for the exact contract.
 */
export function slugify(_input: string): string {
  const map: Record<string, string> = {
    à: "a", á: "a", â: "a", ä: "a", å: "a", æ: "ae",
    ç: "c", è: "e", é: "e", ê: "e", ë: "e",
    ì: "i", í: "i", î: "i", ï: "i",
    ñ: "n", ò: "o", ó: "o", ô: "o", ö: "o", ø: "oe",
    ù: "u", ú: "u", û: "u", ü: "u",
    ÿ: "y", ß: "ss",
    é: "e", ê: "e", ë: "e"
  };
  let result = _input.toLowerCase();
  result = result.replace(/[^\x00-\x7F]/g, (c) => map[c] || c);
  result = result.replace(/[^a-z0-9]+/g, "-");
  result = result.replace(/^-+|-+$/g, "");
  return result;
}
