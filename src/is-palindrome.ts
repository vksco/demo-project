/**
 * True if the string is a palindrome, ignoring case and non-alphanumeric characters.
 * See tests/is-palindrome.test.ts for the exact contract.
 */
export function isPalindrome(input: string): boolean {
  const cleaned = input.toLowerCase().replace(/[^a-z0-9]/g, "");
  let i = 0;
  let j = cleaned.length - 1;
  while (i < j) {
    if (cleaned[i] !== cleaned[j]) return false;
    i++;
    j--;
  }
  return true;
}
