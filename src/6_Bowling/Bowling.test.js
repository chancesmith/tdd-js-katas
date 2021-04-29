const Bowling = require("./Bowling");

describe("Bowling", () => {
  test('should start game', () => {
    const game = new Bowling()
    expect(game).not.toBeUndefined();
  })
  test('should play gutter game', () => {
    const game = new Bowling()

    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.score()).toBe(0)
  })
  test('should play game with 1 pin knocked down each time', () => {
    const game = new Bowling()

    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }

    expect(game.score()).toBe(20)
  })


});
