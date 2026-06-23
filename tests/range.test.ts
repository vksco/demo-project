import { describe, it, expect } from "vitest";
import { range } from "../src/range";

describe("range", () => {
  it("defaults step to 1, excludes stop", () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  });
  it("supports a custom positive step", () => {
    expect(range(1, 10, 2)).toEqual([1, 3, 5, 7, 9]);
  });
  it("supports a negative step (descending)", () => {
    expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  });
  it("returns empty when start == stop", () => {
    expect(range(3, 3)).toEqual([]);
  });
  it("throws on step of 0", () => {
    expect(() => range(0, 5, 0)).toThrow();
  });
});
