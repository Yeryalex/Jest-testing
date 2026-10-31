import { reverseString } from "../src/reverseString.js";

describe("Reverse String function", () => {
  test("String passed is reversed (1)", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
  test("String passed is reversed (2)", () => {
    expect(reverseString("World")).toBe("dlroW");
  });
  test("String passed is null", () => {
    expect(reverseString(null)).toBe(null);
  });
  test("String passed is undefined", () => {
    expect(reverseString(undefined)).toBe(undefined);
  });
  test("String passed is NaN", () => {
    expect(reverseString(NaN)).toBe(NaN);
  });
  test("String passed is a Number", () => {
    expect(reverseString(4200)).toBe(4200);
  });
});
