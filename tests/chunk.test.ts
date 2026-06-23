import { describe, it, expect } from "vitest";
import { chunk } from "../src/chunk";

describe("chunk", () => {
  it("splits evenly", () => {
    expect(chunk([1, 2, 3, 4], 2)).toEqual([[1, 2], [3, 4]]);
  });
  it("last chunk holds the remainder", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  it("returns empty array for empty input", () => {
    expect(chunk([], 3)).toEqual([]);
  });
  it("throws on size < 1", () => {
    expect(() => chunk([1, 2], 0)).toThrow();
  });
});
