/**
 * Convert a string into a URL-friendly slug.
 * See tests/slugify.test.ts for the exact contract.
 */
export function slugify(input: string): string {
  const accentMap: Record<string, string> = {
    'á': 'a', 'à': 'a', 'â': 'a', 'ä': 'a', 'ã': 'a',
    'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
    'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
    'ó': 'o', 'ò': 'o', 'ô': 'o', 'ö': 'o', 'õ': 'o',
    'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
    'ñ': 'n', 'ç': 'c', 'ß': 's'
  };
  
  let result = input.toLowerCase();
  result = result.split('').map(c => accentMap[c] || c).join('');
  result = result.replace(/[^a-z0-9]+/g, '-');
  result = result.replace(/^-+|-+$/g, '');
  return result;
}
