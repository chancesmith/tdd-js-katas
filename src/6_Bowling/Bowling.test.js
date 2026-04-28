const Bowling = require("./Bowling");


describe("Bowling", () => {
  let game;

  beforeEach(()=>{
    game = new Bowling()
  })

  test('starts game', () => {
    expect(game).not.toBeUndefined();
  })
  test('plays gutter game', () => {
    manyRolls(20, 0)
    expect(game.score()).toBe(0)
  })
  test('plays game with 1 pin knocked down each time', () => {
    manyRolls(20, 1)
    expect(game.score()).toBe(20)
  })

  it('rolls 1 spare then all 0s', () => {
    game.roll(5)
    game.roll(5) // spare
    manyRolls(18, 0)
    expect(game.score()).toBe(10)
  })
  // it('rolls 1 strike then all 0s', () => {
  //   game.roll(10) // strike
  //   game.roll(3)
  //   game.roll(4)
  //   manyRolls(16, 0)
  //   expect(game.score()).toBe(20)
  // })

  // it('rolls all strikes', () => {
  //   manyRolls(12,10)
  //   expect(game.score()).toBe(300)
  // })

  function manyRolls(rolls, pinsDown) {
    for (let i = 0; i < rolls; i++) {
      game.roll(pinsDown);
    }
  }
});
