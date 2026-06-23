import { describe, it, expect } from "vitest";
import { fizzbuzz } from "../src/fizzbuzz";

describe("fizzbuzz", () => {
  it("covers 1..n with fizz/buzz rules", () => {
    expect(fizzbuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });
  it("emits FizzBuzz for multiples of 15", () => {
    expect(fizzbuzz(15)[14]).toBe("FizzBuzz");
  });
  it("returns empty array for n = 0", () => {
    expect(fizzbuzz(0)).toEqual([]);
  });
});
