const PrimeFactors = require("../3_prime-factors");

describe("PrimeFactors", () => {
  let pf;
  beforeEach(() => {
    pf = new PrimeFactors();
  });

  test("transformation: null to constant", () => {
    expect(pf.generate(1)).toEqual([]);
  });

  test("transformation: constant to variable (generalize, split-flow)", () => {
    expect(pf.generate(2)).toEqual([2]);
  });

  test("transformation: constant to variable (generalize), add-computation", () => {
    expect(pf.generate(3)).toEqual([3]);
    expect(pf.generate(4)).toEqual([2, 2]);
    expect(pf.generate(5)).toEqual([5]);
    expect(pf.generate(6)).toEqual([2, 3]);
    expect(pf.generate(7)).toEqual([7]);
    expect(pf.generate(8)).toEqual([2, 2, 2]);
    expect(pf.generate(9)).toEqual([3, 3]);
    expect(pf.generate(4620)).toEqual([2, 2, 3, 5, 7, 11]);
  });
});
