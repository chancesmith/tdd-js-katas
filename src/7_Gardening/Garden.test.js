const Garden = require("./Garden");

describe("Garden", () => {
  it('should not plant on empty garden', () => {
    const g = new Garden()
    const result = g.canPlant()
    expect(result).toBe(false)
  });
  it('should not plant if no spot is selected', () => {
    const g = new Garden()
    const result = g.canPlant([0])
    expect(result).toBe(false)
  });
  it('should plant at position 0', () => {
    const g = new Garden()
    const result = g.canPlant([0], 1)
    expect(result).toBe(true)
  });
  it('should not plant at position 0', () => {
    const g = new Garden()
    const result = g.canPlant([1], 0)
    expect(result).toBe(false)
  });
  it('should plant at position 2', () => {
    const g = new Garden()
    const result = g.canPlant([1,0,0,0,1], 2)
    expect(result).toBe(true)
  });
  it('should not plant two of them', () => {
    const g = new Garden()
    const result = g.canPlant([1,0,0,0,1], 4)
    expect(result).toBe(false)
  });
});
