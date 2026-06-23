/**
 * True if the string is a palindrome, ignoring case and non-alphanumeric characters.
 * See tests/is-palindrome.test.ts for the exact contract.
 */
export function isPalindrome(input: string): boolean {
  // Extract only alphanumeric characters and convert to lowercase
  const cleaned = input.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Empty or single character strings are palindromes
  if (cleaned.length <= 1) {
    return true;
  }
  
  // Check if the string reads the same forward and backward
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
