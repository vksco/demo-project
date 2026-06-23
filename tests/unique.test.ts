import { describe, it, expect } from "vitest";
import { unique } from "../src/unique";

describe("unique", () => {
  it("removes duplicates, keeps first-seen order", () => {
    expect(unique([1, 2, 2, 3, 1])).toEqual([1, 2, 3]);
  });
  it("works on strings", () => {
    expect(unique(["a", "b", "a", "c", "b"])).toEqual(["a", "b", "c"]);
  });
  it("returns empty for empty input", () => {
    expect(unique([])).toEqual([]);
  });
});
