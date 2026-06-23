import { describe, it, expect } from "vitest";
import { parseQuery } from "../src/parse-query";

describe("parseQuery", () => {
  it("parses simple pairs", () => {
    expect(parseQuery("a=1&b=2")).toEqual({ a: "1", b: "2" });
  });
  it("tolerates a leading '?'", () => {
    expect(parseQuery("?x=hello")).toEqual({ x: "hello" });
  });
  it("url-decodes keys and values", () => {
    expect(parseQuery("full%20name=John%20Doe")).toEqual({ "full name": "John Doe" });
  });
  it("collapses repeated keys into an array", () => {
    expect(parseQuery("tag=a&tag=b&tag=c")).toEqual({ tag: ["a", "b", "c"] });
  });
  it("treats a key with no '=' as empty string", () => {
    expect(parseQuery("flag")).toEqual({ flag: "" });
  });
  it("returns empty object for empty input", () => {
    expect(parseQuery("")).toEqual({});
  });
});
