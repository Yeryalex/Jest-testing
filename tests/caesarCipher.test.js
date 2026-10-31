import { caesarCipher } from "../src/caesarCipher.js";

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

describe("Caesar strings different ASCII chars", () => {
  test("Uppercase letters", () => {
    expect(caesarCipher("ABC", 27)).toBe("BCD");
    expect(caesarCipher("XYZ", 29)).toBe("ABC");
    expect(caesarCipher("ABC", 3)).toBe("DEF");
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  });
  test("No letters chars", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
