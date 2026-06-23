/**
 * Convert a string into a URL-friendly slug.
 * See tests/slugify.test.ts for the exact contract.
 */

// Map of accented characters to their ASCII equivalents
const accentMap: Record<string, string> = {
  'á': 'a', 'à': 'a', 'â': 'a', 'ä': 'a', 'ã': 'a', 'å': 'a',
  'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
  'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
  'ó': 'o', 'ò': 'o', 'ô': 'o', 'ö': 'o', 'õ': 'o', 'ø': 'o',
  'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
  'ñ': 'n', 'ç': 'c', 'ß': 's',
  'æ': 'ae', 'œ': 'oe',
  'Á': 'a', 'À': 'a', 'Â': 'a', 'Ä': 'a', 'Ã': 'a', 'Å': 'a',
  'É': 'e', 'È': 'e', 'Ê': 'e', 'Ë': 'e',
  'Í': 'i', 'Ì': 'i', 'Î': 'i', 'Ï': 'i',
  'Ó': 'o', 'Ò': 'o', 'Ô': 'o', 'Ö': 'o', 'Õ': 'o', 'Ø': 'o',
  'Ú': 'u', 'Ù': 'u', 'Û': 'u', 'Ü': 'u',
  'Ñ': 'n', 'Ç': 'c',
};

function transliterate(char: string): string {
  return accentMap[char] ?? char;
}

export function slugify(input: string): string {
  // Transliterate accented characters to ASCII
  let result = input.split('').map(transliterate).join('');

  // Lowercase
  result = result.toLowerCase();

  // Replace non-alphanumeric characters (except spaces) with hyphens
  // This strips punctuation and keeps spaces
  result = result.replace(/[^a-z0-9\s]/g, ' ');

  // Replace sequences of spaces/hyphens with a single hyphen
  result = result.replace(/[\s-]+/g, '-');

  // Trim leading and trailing hyphens
  result = result.replace(/^-+|-+$/g, '');

  return result;
}
