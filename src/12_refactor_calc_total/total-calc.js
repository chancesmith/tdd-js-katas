function calculateTotal(cart) {
  let total = 0;

  for (const item of cart) {
    let price = item.price;

    if (item.discount) {
      price *= 1 - item.discount;
    }

    if (item.tax) {
      price *= 1 + item.tax;
    }

    total += price;
  }

  return total;
}

module.exports = calculateTotal;
