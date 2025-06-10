import { expect, test, describe } from "vitest";
import { sum, multiply } from "./calculator.js";

describe("sum tests", () => {
  test("add 1 & 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("add 5 & 6 to equal 11", () => {
    const result = sum(5, 6);
    expect(result).toBe(11);
  });
});

describe("multiply tests", () => {
  test("multiply 3 & 4 to equal 12", () => {
    const result = multiply(3, 4);
    const answer = 12;
    expect(result).toBe(answer);
  });

  test("multiply 200 & 99 to equal 19800", () => {
    const result = multiply(200, 99);
    const answer = 19800;
    expect(result).toBe(answer);
  });
});
