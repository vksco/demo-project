/**
 * Convert a string into a URL-friendly slug.
 * See tests/slugify.test.ts for the exact contract.
 */
export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/([^a-z0-9]+)+/g, "-")
    .replace(/^-+|-+$/g, "");
}
