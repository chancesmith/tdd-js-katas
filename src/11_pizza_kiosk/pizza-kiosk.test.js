const Order = require("./pizza-kiosk");

// 1. name of customer (first and last)
// 2. phone
// 3. address
// 4. pizza size
// 5. pizza crust type
// 6. pizza toppings
// 7. pizza cut type
// 8. get total + tax
// 9. payment method

describe("Pizza Kiosk", () => {
  it("should add customer name", () => {
    // Arrange
    const firstName = "John";
    const lastName = "Doe";
    // Act
    const order = new Order();
    order.addCustomerName();
    // Assert
    expect(order.customer).toStrictEqual({ firstName, lastName });
  });
});
