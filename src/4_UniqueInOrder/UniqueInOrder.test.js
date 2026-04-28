const UniqueInOrder = require("./UniqueInOrder");

describe("UniqueInOrder", () => {
  test("works with empty array", () => {
    expect(UniqueInOrder.uniqueInOrder("")).toEqual([]);
  });
  test("works with one element", () => {
    expect(UniqueInOrder.uniqueInOrder("A")).toEqual(["A"]);
  });
  test("works with many elements", () => {
    expect(UniqueInOrder.uniqueInOrder("AAABBABBBAC")).toEqual([
      "A",
      "B",
      "A",
      "B",
      "A",
      "C"
    ]);
  });
  test("works with array of ints", () => {
    expect(UniqueInOrder.uniqueInOrder([1, 2, 3, 3])).toEqual([1, 2, 3]);
  });
});
