// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).
// if given 4, return an array of:
// [
//   '   *   ',
//   '  ***  ',
//   ' ***** ',
//   '*******',
// ]

class BuildTower {
  build(nLevels, index = 1, tower = []) {
    if (nLevels === 0) return tower;
    const air = " ".repeat(nLevels - index);
    const bricks = "*".repeat(2 * index - 1); // keeps the bricks odd
    const layer = `${air}${bricks}${air}`;
    tower.push(layer);
    return nLevels === index ? tower : this.build(nLevels, index + 1, tower);
  }
}

module.exports = BuildTower;
