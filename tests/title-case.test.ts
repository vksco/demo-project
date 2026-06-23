import { describe, it, expect } from "vitest";
import { titleCase } from "../src/title-case";

// Stop words kept lowercase mid-sentence: a, an, and, the, of, to, in, on, or, for
describe("titleCase", () => {
  it("capitalizes each significant word", () => {
    expect(titleCase("the quick brown fox")).toBe("The Quick Brown Fox");
  });
  it("keeps stop words lowercase in the middle", () => {
    expect(titleCase("lord of the rings")).toBe("Lord of the Rings");
  });
  it("always capitalizes the first and last word, even stop words", () => {
    expect(titleCase("the war of the worlds")).toBe("The War of the Worlds");
    expect(titleCase("something to live for")).toBe("Something to Live For");
  });
  it("normalizes mixed-case input", () => {
    expect(titleCase("a TALE of TWO cities")).toBe("A Tale of Two Cities");
  });
});
