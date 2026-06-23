import { describe, it, expect } from "vitest";
import { gcd } from "../src/gcd";

describe("gcd", () => {
  it("computes common divisors", () => {
    expect(gcd(12, 18)).toBe(6);
    expect(gcd(7, 1)).toBe(1);
    expect(gcd(48, 36)).toBe(12);
  });
  it("treats 0 as identity", () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
  });
  it("uses absolute values for negatives", () => {
    expect(gcd(-12, 18)).toBe(6);
  });
});
