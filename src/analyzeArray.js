function analizeArray(array) {
  if (!Array.isArray(array)) return {};
  const average =
    array.reduce((prev, current) => prev + current, 0) / array.length;

  return {
    average: average,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

export { analizeArray };
