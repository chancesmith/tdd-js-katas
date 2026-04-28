const StringCalculator = require("./StringCalculator");

describe("StringCalculator", () => {
  let sc;

  beforeEach(() => {
    sc = new StringCalculator();
  });

  test("returns 0 for empty string", () => {
    expect(sc.add()).toBe(0);
    expect(sc.add("")).toBe(0);
  });

  test("returns single number", () => {
    expect(sc.add("1")).toBe(1);
    expect(sc.add("2")).toBe(2);
  });

  test("returns sum of two numbers with comma delimiter", () => {
    expect(sc.add("1,2")).toBe(3);
    expect(sc.add("2,2")).toBe(4);
  });

  test("returns sum of two numbers with newline delimiter", () => {
    expect(sc.add("1\n2")).toBe(3);
    expect(sc.add("2\n2")).toBe(4);
  });

  test("returns sum of three numbers with comma and newline delimiters", () => {
    expect(sc.add("1\n2,3")).toBe(6);
    expect(sc.add("2\n2,4")).toBe(8);
  });

  test("throws exception when given negative numbers", () => {
    expect(() => sc.add("-1,2-3")).toThrow(
      new Error("negatives not allowed: -1,-3")
    );
  });
});
