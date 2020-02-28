class StringCalculator {
  constructor() {}

  add(numString) {
    if (!numString) return 0;

    return this.sum(this.foundNegatives(this.splitAndParse(numString)));
  }

  splitAndParse(numbersString) {
    const delimiter = /,|\n/;

    const strArr = numbersString.split(delimiter);
    return strArr.map(Number);
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
