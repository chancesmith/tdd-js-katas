const BuildTower = require("./BuildTower");

describe("BuildTower", () => {
  let bt;

  beforeEach(() => {
    bt = new BuildTower();
  });

  test("should build nothing", () => {
    expect(bt.build(0)).toEqual([]);
  });

  test("should build one level", () => {
    expect(bt.build(1)).toEqual(["*"]);
  });

  test("should build two levels", () => {
    expect(bt.build(2)).toEqual([" * ", "***"]);
  });

  test("should build five levels", () => {
    expect(bt.build(5)).toEqual([
      "    *    ",
      "   ***   ",
      "  *****  ",
      " ******* ",
      "*********"
    ]);
  });
});
