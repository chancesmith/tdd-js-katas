const ScoreKeeper = require("./ScoreKeeper");



describe("ScoreKeeper", () => {
  let sk;

  beforeEach(()=>{
    sk = new ScoreKeeper();
  })
  it('should get zero score to start', () => {
    const score = sk.getScore()
    expect(score).toBe('000-000')
  });
  it('should give A team 1 point', () => {
    sk.scoreTeamA1()
    const score = sk.getScore()
    expect(score).toBe('001-000')
  });
  it('should give A team 2 point', () => {
    sk.scoreTeamA2()
    const score = sk.getScore()
    expect(score).toBe('002-000')
  });
  it('should give A team 3 point', () => {
    sk.scoreTeamA3()
    const score = sk.getScore()
    expect(score).toBe('003-000')
  });
  it('should give A team 10 point', () => {
    sk.scoreTeamA3()
    sk.scoreTeamA3()
    sk.scoreTeamA3()
    sk.scoreTeamA1()
    const score = sk.getScore()
    expect(score).toBe('010-000')
  });
  it('should stringify score 1 to 001', () => {
    const score = sk.stringifyScore(1)
    expect(score).toBe('001')
  });
  it('should stringify score 10 to 010', () => {
    const score = sk.stringifyScore(10)
    expect(score).toBe('010')
  });
  it('should stringify score 100 to 100', () => {
    const score = sk.stringifyScore(100)
    expect(score).toBe('100')
  });
});
