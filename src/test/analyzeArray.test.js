import { analizeArray } from "./analyzeArray.js";

describe("Analize Array", () => {
  test("Returns an object with the specific keys", () => {
    expect(analizeArray([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
    expect(analizeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("No array passed", () => {
    expect(analizeArray()).toEqual({});
  });
  test("Any other type variable", () => {
    expect(analizeArray("[]")).toEqual({});
    expect(analizeArray("hola")).toEqual({});
    expect(analizeArray(6554)).toEqual({});
    expect(analizeArray(null)).toEqual({});
  });
});
