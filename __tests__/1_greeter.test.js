const Greeter = require("../1_greeter");

describe("Greeter", () => {
  let gtr;
  let date;
  let logger;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    date.setMinutes(0);

    logger = {
      log: jest.fn()
    };

    gtr = new Greeter(() => date.getTime(), logger);
  });

  test("should greet", () => {
    expect(gtr.greet()).toBe("Hello!");
  });

  test("should greet with name", () => {
    expect(gtr.greet("Chance")).toBe("Hello, Chance!");
    expect(gtr.greet("Bob")).toBe("Hello, Bob!");
  });

  test("should trim name", () => {
    expect(gtr.greet(" Chance  ")).toBe("Hello, Chance!");
  });

  test("should capitalize first letter of name", () => {
    expect(gtr.greet("chance")).toBe("Hello, Chance!");
  });

  test("should greet morning: 06:00 - 12:00", () => {
    date.setHours(6);
    expect(gtr.greet("chance")).toBe("Good Morning, Chance!");
    date.setHours(8);
    expect(gtr.greet("chance")).toBe("Good Morning, Chance!");
    date.setHours(11);
    expect(gtr.greet("chance")).toBe("Good Morning, Chance!");
  });

  test("should greet evening: 18:00 - 22:00", () => {
    date.setHours(18);
    expect(gtr.greet("chance")).toBe("Good evening, Chance!");
    date.setHours(19);
    expect(gtr.greet("chance")).toBe("Good evening, Chance!");
    date.setHours(21);
    expect(gtr.greet("chance")).toBe("Good evening, Chance!");
  });

  test("should greet night: 22:00 - 06:00", () => {
    date.setHours(22);
    expect(gtr.greet("chance")).toBe("Good night, Chance!");
    date.setHours(2);
    expect(gtr.greet("chance")).toBe("Good night, Chance!");
    date.setHours(5);
    expect(gtr.greet("chance")).toBe("Good night, Chance!");
  });

  test("should greet afternoon: 22:00 - 06:00", () => {
    date.setHours(13);
    expect(gtr.greet("chance")).toBe("Hello, Chance!");
  });

  test("should log into console when called", () => {
    expect(logger.log).not.toHaveBeenCalled();
    gtr.greet("Chance");
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith("greeted Chance");
    gtr.greet("Bob");
    expect(logger.log).toHaveBeenCalledTimes(2);
    expect(logger.log).toHaveBeenCalledWith("greeted Bob");
  });
});
