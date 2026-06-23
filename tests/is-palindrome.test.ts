import { describe, it, expect } from "vitest";
import { isPalindrome } from "../src/is-palindrome";

describe("isPalindrome", () => {
  it("ignores case, spaces, and punctuation", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  it("rejects non-palindromes", () => {
    expect(isPalindrome("race a car")).toBe(false);
  });
  it("treats empty / single char as palindrome", () => {
    expect(isPalindrome("")).toBe(true);
    expect(isPalindrome("x")).toBe(true);
  });
  it("handles alphanumerics", () => {
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("12345")).toBe(false);
  });
});
