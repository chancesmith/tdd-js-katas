// source: https://kata-log.rocks/bowling-game-kata by uncle bob
// boilerplate: https://github.com/swkBerlin/kata-bootstraps/blob/master/js/jest-tests/test/ES6Class.test.js
// ----Bowling Rules----
// 1. The game consists of 10 frames. In each frame the player has two rolls to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
// 2. A spare is when the player knocks down all 10 pins in two rolls. The bonus for that frame is the number of pins knocked down by the next roll.
// 3. A strike is when the player knocks down all 10 pins on his first roll. The frame is then completed with a single roll. The bonus for that frame is the value of the next two rolls.
// 4. In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

// ----Requirements----
// Write a class Game that has two methods
// – void roll(int) is called each time the player rolls a ball. The argument is the number of pins knocked down.
// – int score() returns the total score for that game.

class Bowling {

  constructor(){
    this.rolls = [];
    this.currentFrame = 0;
  }

  roll(pins){
    this.rolls[this.currentFrame] = pins;
    this.currentFrame++
  }

  score(){
    let totalScore = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      // const isStrike = this.rolls[frame] == 10
      const isSpare = this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10
      // if (isStrike) {
      //   totalScore += 10 + this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
      //   frameIndex++;
      // }
      if (isSpare) {
        totalScore = totalScore + 10 + this.rolls[frameIndex + 2];
        frameIndex += 2;
      } else {
        totalScore += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
        frameIndex += 2;
      }
    }
    return totalScore
  }
}

module.exports = Bowling;
