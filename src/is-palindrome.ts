/**
 * True if the string is a palindrome, ignoring case and non-alphanumeric characters.
 * See tests/is-palindrome.test.ts for the exact contract.
 */
export function isPalindrome(input: string): boolean {
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
