const calculator = {
  sum: (a, b) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    )
      throw new Error("At least one value is not a valid argument");
    return a + b;
  },
  substract: (a, b) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    )
      throw new Error("At least one value is not a valid argument");

    return a - b;
  },
  multiply: (a, b) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    )
      throw new Error("At least one value is not a valid argument");

    return a * b;
  },
  divide: (a, b) => {
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      Number.isNaN(a) ||
      Number.isNaN(b)
    )
      throw new Error("At least one value is not a valid argument");

    return a / b;
  },
};

export { calculator };
