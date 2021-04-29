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

// Rules
// The returned String always has seven characters. An example would be 000:000

class ScoreKeeper {
  constructor(){
    this.teamAScore = 0
    this.teamBScore = 0
  }

  getScore(){
    const teamA = this.stringifyScore(this.teamAScore)
    const teamB = this.stringifyScore(this.teamBScore)
    return `${teamA}-${teamB}`;
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
  scoreTeamB1(){
    this.teamBScore += 1
  }
  scoreTeamB2(){
    this.teamBScore += 2
  }
  scoreTeamB3(){
    this.teamBScore += 3
  }

  stringifyScore(score){
    if(score.toString().length === 1) return `00${score}`
    if(score.toString().length === 2) return `0${score}`
    return score.toString();
  }
}

module.exports = ScoreKeeper;
