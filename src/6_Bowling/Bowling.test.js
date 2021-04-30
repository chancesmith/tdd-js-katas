const Bowling = require("./Bowling");


describe("Bowling", () => {
  let game;

  beforeEach(()=>{
    game = new Bowling()
  })

  test('should start game', () => {
    expect(game).not.toBeUndefined();
  })
  test('should play gutter game', () => {
    manyRolls(20, 0)
    expect(game.score()).toBe(0)
  })
  test('should play game with 1 pin knocked down each time', () => {
    manyRolls(20, 1)
    expect(game.score()).toBe(20)
  })

  it('should roll 1 spare then all 0s', () => {
    game.roll(5)
    game.roll(5) // spare
    manyRolls(18, 0)
    expect(game.score()).toBe(10)
  })
  // it('should roll 1 strike then all 0s', () => {
  //   game.roll(10) // strike
  //   game.roll(3)
  //   game.roll(4)
  //   manyRolls(16, 0)
  //   expect(game.score()).toBe(20)
  // })

  // it('should roll all strikes', () => {
  //   manyRolls(12,10)
  //   expect(game.score()).toBe(300)
  // })

  function manyRolls(rolls, pinsDown) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pinsDown);
    }
  }
});
