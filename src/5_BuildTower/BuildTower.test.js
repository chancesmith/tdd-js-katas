const BuildTower = require("./BuildTower");

describe("BuildTower", () => {
  let bt;

  beforeEach(() => {
    bt = new BuildTower();
  });

  test("builds nothing", () => {
    expect(bt.build(0)).toEqual([]);
  });

  test("builds one level", () => {
    expect(bt.build(1)).toEqual(["*"]);
  });

  test("builds two levels", () => {
    expect(bt.build(2)).toEqual([" * ", "***"]);
  });

  test("builds five levels", () => {
    expect(bt.build(5)).toEqual([
      "    *    ",
      "   ***   ",
      "  *****  ",
      " ******* ",
      "*********"
    ]);
  });
});
