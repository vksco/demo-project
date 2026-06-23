/**
 * Classic FizzBuzz: return an array of length n covering 1..n.
 * Multiples of 3 -> "Fizz", of 5 -> "Buzz", of both -> "FizzBuzz",
 * otherwise the number as a string.
 * See tests/fizzbuzz.test.ts for the exact contract.
 */
export function fizzbuzz(n: number): string[] {
  if (n === 0) return [];
  
  const result: string[] = [];
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(String(i));
    }
  }
  return result;
}
