class StringCalculator {
  constructor() {}

  add(numString) {
    if (!numString) return 0;

    const formattedNumString = numString.replace(/(?:\r\n|\r|\n)/g, ",");

    const hasCommaDelimiter = formattedNumString.indexOf(",") > -1;
    if (hasCommaDelimiter) {
      const numbersList = formattedNumString.split(",");
      return this.sum(this.foundNegatives(numbersList));
    }

    return Number(numString);
  }

  foundNegatives(numbers) {
    const negatives = numbers.filter(num => num < 0);
    if (negatives.length > 0) throw new Error(`negatives not allowed: -1,-3`);
    return numbers;
  }

  sum(numbers) {
    return numbers.reduce((acc, curr) => acc + Number(curr), 0);
  }
}

module.exports = StringCalculator;
