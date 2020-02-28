const UniqueInOrder = require("./UniqueInOrder");

describe("UniqueInOrder", () => {
  test("should work with empty array", () => {
    expect(UniqueInOrder.uniqueInOrder("")).toEqual([]);
  });
  test("should work with one element", () => {
    expect(UniqueInOrder.uniqueInOrder("A")).toEqual(["A"]);
  });
  test("should work with many elements", () => {
    expect(UniqueInOrder.uniqueInOrder("AAABBABBBAC")).toEqual([
      "A",
      "B",
      "A",
      "B",
      "A",
      "C"
    ]);
  });
  test("should work with array of ints", () => {
    expect(UniqueInOrder.uniqueInOrder([1, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
