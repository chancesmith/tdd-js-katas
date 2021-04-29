// Problem
// We need software to deliver the proper data to the scoreboard for a basketball team. Unfortunately the people using our software are not the brightest lights under the sun, so they need six buttons (each team can score either 1, 2 or 3 points with a single shot).

// Your Task
// Write a class ScoreKeeper which offers following methods:

// void scoreTeamA1()
// void scoreTeamA2()
// void scoreTeamA3()
// void scoreTeamB1()
// void scoreTeamB2()
// void scoreTeamB3()
// String getScore()

class ScoreKeeper {
  constructor(){
    this.teamAScore = 0
  }

  getScore(){
    const teamA = this.stringifyScore(this.teamAScore)
    // const teamA = stringifyScore(this.teamAScore)
    return `${teamA}-000`;
  }
  scoreTeamA1(){
    this.teamAScore += 1
  }
  scoreTeamA2(){
    this.teamAScore += 2
  }
  scoreTeamA3(){
    this.teamAScore += 3
  }

  stringifyScore(score){
    if(score.toString().length === 1) return `00${score}`
    if(score.toString().length === 2) return `0${score}`
    return score.toString();
  }
}

module.exports = ScoreKeeper;
