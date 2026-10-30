import { caesarCipher } from "./caesarCipher.js";

describe("Caesar cipher functionality", () => {
  test("exists", () => {
    expect(caesarCipher("sa", 21)).toBe(1);
  });
});
