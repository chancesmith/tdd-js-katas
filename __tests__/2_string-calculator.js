const StringCalculator = require("../2_string-calculator");

describe("StringCalculator", () => {
  let sc;

  beforeEach(() => {
    sc = new StringCalculator();
  });

  test("should empty string returns empty", () => {
    expect(sc.add()).toBe(0);
    expect(sc.add("")).toBe(0);
  });

  test("should return single number", () => {
    expect(sc.add("1")).toBe(1);
    expect(sc.add("2")).toBe(2);
  });

  test("should return sum of two numbers with comma delimiter", () => {
    expect(sc.add("1,2")).toBe(3);
    expect(sc.add("2,2")).toBe(4);
  });

  test("should return sum of two numbers with newline delimiter", () => {
    expect(sc.add("1\\n2")).toBe(3);
    expect(sc.add("2\\n2")).toBe(4);
  });

  test("should return sum of three numbers with comma and newline delimiters", () => {
    expect(sc.add("1\\n2,3")).toBe(5);
    expect(sc.add("2\\n2,4")).toBe(8);
  });
});
