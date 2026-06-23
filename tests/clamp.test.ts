import { describe, it, expect } from "vitest";
import { clamp } from "../src/clamp";

describe("clamp", () => {
  it("passes values already in range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });
  it("clamps below min and above max", () => {
    expect(clamp(-3, 0, 10)).toBe(0);
    expect(clamp(99, 0, 10)).toBe(10);
  });
  it("works on the boundaries", () => {
    expect(clamp(0, 0, 10)).toBe(0);
    expect(clamp(10, 0, 10)).toBe(10);
  });
  it("throws when min > max", () => {
    expect(() => clamp(5, 10, 0)).toThrow();
  });
});
