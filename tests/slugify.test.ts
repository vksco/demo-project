import { describe, it, expect } from "vitest";
import { slugify } from "../src/slugify";

describe("slugify", () => {
  it("lowercases and hyphenates words", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });
  it("strips punctuation", () => {
    expect(slugify("Café & Bar!")).toBe("cafe-bar");
  });
  it("collapses repeated separators and trims them", () => {
    expect(slugify("  multiple   spaces--here  ")).toBe("multiple-spaces-here");
  });
  it("handles accented characters by transliterating to ascii", () => {
    expect(slugify("Crème Brûlée")).toBe("creme-brulee");
  });
  it("returns empty string for input with no slug-able characters", () => {
    expect(slugify("!!! ???")).toBe("");
  });
});
