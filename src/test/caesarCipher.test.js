import { caesarCipher } from "./caesarCipher.js";

describe("Caesar cipher functionality", () => {
  test("Cipher strings", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
    expect(caesarCipher("abc", 3)).toBe("def");
    expect(caesarCipher("a", 3)).toBe("d");
    expect(caesarCipher("c", 3)).toBe("f");
  });
});

describe("Caesar shift value out of range", () => {
  test("Shift values bigger than 26", () => {
    expect(caesarCipher("abc", 27)).toBe("bcd");
    expect(caesarCipher("xyz", 29)).toBe("abc");
    expect(caesarCipher("abc", 29)).toBe("def");
    expect(caesarCipher("a", 29)).toBe("d");
    expect(caesarCipher("c", 29)).toBe("f");
    expect(caesarCipher("c", 26)).toBe("c");
  });
  test("Shift values lower than 0", () => {
    expect(caesarCipher("abc", -1)).toBe("zab");
    expect(caesarCipher("xyz", -1)).toBe("wxy");
    expect(caesarCipher("abc", -3)).toBe("xyz");
  });
});
