import { calculator } from "./calculator.js";

describe("Sum Calculator", () => {
  test("Sum two numbers (1)", () => {
    expect(calculator.sum(2, 3)).toBe(5);
  });
  test("Sum two numbers (2)", () => {
    expect(calculator.sum(20, 13)).toBe(33);
  });
  test("Sum two numbers (one negative)", () => {
    expect(calculator.sum(-2, 3)).toBe(1);
  });
  test("Sum two numbers (both negative)", () => {
    expect(calculator.sum(-2, -3)).toBe(-5);
  });
});

describe("Substract Calculator", () => {
  test("Substract two numbers (1)", () => {
    expect(calculator.substract(2, 3)).toBe(-1);
  });
  test("Substract two numbers (2)", () => {
    expect(calculator.substract(20, 13)).toBe(7);
  });
  test("Substract two numbers (one negative)", () => {
    expect(calculator.substract(-2, 3)).toBe(-5);
  });
  test("Substract two numbers (both negative)", () => {
    expect(calculator.substract(-2, -3)).toBe(1);
  });
});

describe("Multiply Calculator", () => {
  test("Multiply two numbers (1)", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
  test("Multiply two numbers (2)", () => {
    expect(calculator.multiply(20, 13)).toBe(260);
  });
  test("Multiply two numbers (one negative)", () => {
    expect(calculator.multiply(-2, 3)).toBe(-6);
  });
  test("Multiply two numbers (both negative)", () => {
    expect(calculator.multiply(-2, -3)).toBe(6);
  });
});

describe("Divide Calculator", () => {
  test("Divide two numbers (1)", () => {
    expect(calculator.divide(2, 3)).toBe(2 / 3);
  });
  test("Divide two numbers (2)", () => {
    expect(calculator.divide(20, 13)).toBe(20 / 13);
  });
  test("Divide two numbers (3)", () => {
    expect(calculator.divide(20, 20)).toBe(1);
  });
  test("Divide two numbers (one negative)", () => {
    expect(calculator.divide(-2, 3)).toBe(-2 / 3);
  });
  test("Divide two numbers (both negative)", () => {
    expect(calculator.divide(-2, -3)).toBe(-2 / -3);
  });
  test("Divide number by Zero", () => {
    expect(calculator.divide(20, 0)).toBe(Infinity);
  });
});

describe("Pass no proper argument Sum", () => {
  test("Pass NaN argument", () => {
    expect(() => calculator.sum(NaN, 1)).toThrow();
  });
  test("Pass null argument", () => {
    expect(() => calculator.sum(null, 1)).toThrow();
  });
  test("Pass undefined argument", () => {
    expect(() => calculator.sum(1, undefined)).toThrow();
  });
  test("Pass Objects or arrays argument", () => {
    expect(() => calculator.sum({}, [])).toThrow();
  });
});

describe("Pass no proper argument Substract", () => {
  test("Pass NaN argument", () => {
    expect(() => calculator.substract(NaN, 1)).toThrow();
  });
  test("Pass null argument", () => {
    expect(() => calculator.substract(null, 1)).toThrow();
  });
  test("Pass undefined argument", () => {
    expect(() => calculator.substract(1, undefined)).toThrow();
  });
  test("Pass Objects or arrays argument", () => {
    expect(() => calculator.substract({}, [])).toThrow();
  });
});

describe("Pass no proper argument Multiply", () => {
  test("Pass NaN argument", () => {
    expect(() => calculator.multiply(NaN, 1)).toThrow();
  });
  test("Pass null argument", () => {
    expect(() => calculator.multiply(null, 1)).toThrow();
  });
  test("Pass undefined argument", () => {
    expect(() => calculator.multiply(1, undefined)).toThrow();
  });
  test("Pass Objects or arrays argument", () => {
    expect(() => calculator.multiply({}, [])).toThrow();
  });
});

describe("Pass no proper argument Divide", () => {
  test("Pass NaN argument", () => {
    expect(() => calculator.divide(NaN, 1)).toThrow();
  });
  test("Pass null argument", () => {
    expect(() => calculator.divide(null, 1)).toThrow();
  });
  test("Pass undefined argument", () => {
    expect(() => calculator.divide(1, undefined)).toThrow();
  });
  test("Pass Objects or arrays argument", () => {
    expect(() => calculator.divide({}, [])).toThrow();
  });
});
