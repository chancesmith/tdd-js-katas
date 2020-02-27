class StringCalculator {
  constructor() {}

  add(numString) {
    if (!numString) return 0;

    const formattedNumString = numString.replace(/(?:\r\n|\r|\n)/g, ",");

    const hasCommaDelimiter = formattedNumString.indexOf(",") > -1;
    if (hasCommaDelimiter) {
      const numbersList = formattedNumString.split(",");
      return numbersList.reduce((acc, curr) => {
        if (Number(curr) < 0) throw new Error(`negatives not allowed: -1,-3`);
        return acc + Number(curr);
      }, 0);
    }

    return Number(numString);
  }
}

module.exports = StringCalculator;
