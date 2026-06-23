import { describe, it, expect } from "vitest";
import { flatten } from "../src/flatten";

describe("flatten", () => {
  it("flattens one level", () => {
    expect(flatten([1, [2, 3], 4])).toEqual([1, 2, 3, 4]);
  });
  it("flattens deep nesting", () => {
    expect(flatten([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });
  it("preserves order and handles empty arrays", () => {
    expect(flatten([[], [1], [], [2, [3]]])).toEqual([1, 2, 3]);
  });
});
