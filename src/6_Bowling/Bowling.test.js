const Bowling = require("./Bowling");

describe("Bowling", () => {
  test("should start with score of 0", () => {
    // arrange
    const game = new Bowling();
    // assert
    expect(game.score()).toBe(0);
  });

  test("should knock down 1 pin and score be 1", () => {
    // arrange
    const game = new Bowling();
    // act
    game.roll(1);
    // assert
    expect(game.score()).toBe(1)
  });
  test("should knock down 2 pin and score be 2", () => {
    // arrange
    const game = new Bowling();
    // act
    game.roll(2);
    // assert
    expect(game.score()).toBe(2)
  });
});
