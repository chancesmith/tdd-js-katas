const calculateTotal = require("./total-calc");

describe("calculateTotal", () => {
  it("should calculate the total of the cart", () => {
    const cart = [
      { price: 10 },
      { price: 20, discount: 10 },
      { price: 30, tax: 10 },
    ];
    expect(calculateTotal(cart)).toBe(160);
  });
});
