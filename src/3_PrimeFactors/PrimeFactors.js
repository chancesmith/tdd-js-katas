class PrimeFactors {
  constructor() {}

  generate(num) {
    let factors = [];

    for (let divisor = 2; num > 1; divisor++) {
      for (; num % divisor === 0; num /= divisor) {
        factors.push(divisor);
      }
    }

    return factors;
  }
}

module.exports = PrimeFactors;
