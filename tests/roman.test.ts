import { describe, it, expect } from "vitest";
import { romanToInt } from "../src/roman";

describe("romanToInt", () => {
  it("parses additive numerals", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("VIII")).toBe(8);
  });
  it("parses subtractive numerals", () => {
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("CM")).toBe(900);
  });
  it("parses compound numerals", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("MMXXVI")).toBe(2026);
  });
  it("is case-insensitive", () => {
    expect(romanToInt("xiv")).toBe(14);
  });
  it("throws on invalid characters", () => {
    expect(() => romanToInt("ABC")).toThrow();
  });
});
