/**
 * Convert a string into a URL-friendly slug.
 * See tests/slugify.test.ts for the exact contract.
 */

// Map of accented Latin characters to ASCII equivalents
const transliterationMap: Record<string, string> = {
  'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'ā': 'a', 'ă': 'a',
  'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ē': 'e', 'ę': 'e', 'ě': 'e', 'ė': 'e',
  'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i', 'ī': 'i', 'į': 'i',
  'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o', 'ō': 'o', 'ő': 'o',
  'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ū': 'u', 'ű': 'u', 'ů': 'u',
  'ñ': 'n', 'ń': 'n', 'ň': 'n',
  'ç': 'c', 'ć': 'c', 'č': 'c',
  'ş': 's', 'ś': 's', 'š': 's',
  'ž': 'z', 'ź': 'z', 'ż': 'z',
  'ý': 'y', 'ÿ': 'y',
  'ď': 'd', 'đ': 'd',
  'ß': 'ss',
  'æ': 'ae', 'œ': 'oe',
};

function transliterate(char: string): string {
  const lower = char.toLowerCase();
  return transliterationMap[lower] ?? char;
}

export function slugify(input: string): string {
  // Transliterate accented characters to ASCII
  let result = input.split('').map(transliterate).join('');
  
  // Lowercase
  result = result.toLowerCase();
  
  // Replace non-alphanumeric characters (except spaces and hyphens) with space
  // First, replace punctuation and special chars with spaces
  result = result.replace(/[^a-z0-9\s-]/g, ' ');
  
  // Replace sequences of spaces/hyphens with a single space
  result = result.replace(/[\s-]+/g, ' ');
  
  // Trim leading/trailing spaces and hyphens
  result = result.replace(/^[\s-]+|[\s-]+$/g, '');
  
  // Replace spaces with hyphens
  result = result.replace(/\s+/g, '-');
  
  return result;
}
