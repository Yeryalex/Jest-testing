import { capitalize } from "../src/capitalize.js";

describe("Testing function capitalize first letter", () => {
  test("capitalize hello string", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  test("capitalize world string", () => {
    expect(capitalize("world")).toBe("World");
  });
});

describe("Capitalize Receiving unexpected parameters", () => {
  test("null argument in capitalize", () => {
    expect(capitalize(null)).toBe(null);
  });
  test("undefined argument in capitalize", () => {
    expect(capitalize(undefined)).toBe(undefined);
  });
  test("Zero argument in capitalize", () => {
    expect(capitalize(0)).toBe(0);
  });
  test("Any number argument in capitalize", () => {
    expect(capitalize(1)).toBe(1);
  });
  test("NaN argument in capitalize", () => {
    expect(capitalize(NaN)).toBe(NaN);
  });
});
