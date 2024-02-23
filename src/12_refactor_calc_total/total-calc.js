// Refactor the following
// 1. Extract the logic to calculate the total
// 2. how can we return the total and remove the `let` and `forEach` loop

function calculateTotal(cart) {
  let total = 0;
  cart.forEach((item) => {
    let price = item.price;
    if (item.discount) {
      price *= 1 - item.discount;
    }
    if (item.tax) {
      price *= 1 + item.tax;
    }
    total += price;
  });
  return total;
}

module.exports = calculateTotal;
