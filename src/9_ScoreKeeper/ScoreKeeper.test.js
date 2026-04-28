const ScoreKeeper = require("./ScoreKeeper");



describe("ScoreKeeper", () => {
  let sk;

  beforeEach(()=>{
    sk = new ScoreKeeper();
  })
  it('gets zero score to start', () => {
    const score = sk.getScore()
    expect(score).toBe('000-000')
  });
  it('gives A team 1 point', () => {
    sk.scoreTeamA1()
    const score = sk.getScore()
    expect(score).toBe('001-000')
  });
  it('gives A team 2 point', () => {
    sk.scoreTeamA2()
    const score = sk.getScore()
    expect(score).toBe('002-000')
  });
  it('gives A team 3 point', () => {
    sk.scoreTeamA3()
    const score = sk.getScore()
    expect(score).toBe('003-000')
  });
  it('gives A team 10 point', () => {
    sk.scoreTeamA3()
    sk.scoreTeamA3()
    sk.scoreTeamA3()
    sk.scoreTeamA1()
    const score = sk.getScore()
    expect(score).toBe('010-000')
  });
  it('gives B team 1 point', () => {
    sk.scoreTeamB1()
    const score = sk.getScore()
    expect(score).toBe('000-001')
  });
  it('gives B team 2 point', () => {
    sk.scoreTeamB2()
    const score = sk.getScore()
    expect(score).toBe('000-002')
  });
  it('gives B team 3 point', () => {
    sk.scoreTeamB3()
    const score = sk.getScore()
    expect(score).toBe('000-003')
  });
  it('gives B team 10 point', () => {
    sk.scoreTeamB3()
    sk.scoreTeamB3()
    sk.scoreTeamB3()
    sk.scoreTeamB1()
    const score = sk.getScore()
    expect(score).toBe('000-010')
  });
  it('stringifies score 1 to 001', () => {
    const score = sk.stringifyScore(1)
    expect(score).toBe('001')
  });
  it('stringifies score 10 to 010', () => {
    const score = sk.stringifyScore(10)
    expect(score).toBe('010')
  });
  it('stringifies score 100 to 100', () => {
    const score = sk.stringifyScore(100)
    expect(score).toBe('100')
  });
});
