class StringCalculator {
  constructor() {}

  add(numString = "") {
    const isEmpty = numString === "";

    if (isEmpty) return 0;

    const formattedNumString = numString.replace(/(?:\r\n|\r|\n)/g, ",");

    const hasCommaDelimiter = formattedNumString.indexOf(",") > -1;
    if (hasCommaDelimiter) {
      const numbersList = formattedNumString.split(",");
      return numbersList.reduce((acc, curr) => acc + Number(curr), 0);
    }

    return Number(numString);
  }
}

module.exports = StringCalculator;
