const getKthLargestElement = require("./kthLargestElement");

describe("getKthLargestElement", () => {
  it("should return the kth largest element", () => {
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)).toEqual(7);
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)).toEqual(9);
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 9)).toEqual(1);
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)).toEqual(5);
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)).toEqual(2);
    expect(getKthLargestElement([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).toEqual(8);
  });
});
