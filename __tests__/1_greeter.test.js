const Greeter = require("../1_greeter");

describe("Greeter", () => {
  let greeter;
  let date;
  let logger;

  beforeEach(() => {
    date = new Date();
    date.setHours(14);
    date.setMinutes(0);

    logger = {
      log: jest.fn()
    };

    greeter = new Greeter(() => date.getTime(), logger);
  });

  test("should greet", () => {
    expect(greeter.greet()).toBe("Hello!");
  });

  test("should greet with name", () => {
    expect(greeter.greet("Chance")).toBe("Hello, Chance!");
    expect(greeter.greet("Bob")).toBe("Hello, Bob!");
  });

  test("should trim name", () => {
    expect(greeter.greet(" Chance  ")).toBe("Hello, Chance!");
  });

  test("should capitalize first letter of name", () => {
    expect(greeter.greet("chance")).toBe("Hello, Chance!");
  });

  test("should greet morning: 06:00 - 12:00", () => {
    date.setHours(6);
    const result = greeter.greet("chance");
    expect(result).toBe("Good Morning, Chance!");
  });

  test("should greet evening: 18:00 - 22:00", () => {
    date.setHours(19);
    const result = greeter.greet("chance");
    expect(result).toBe("Good evening, Chance!");
  });

  test("should greet night: 22:00 - 06:00", () => {
    date.setHours(23);
    const result = greeter.greet("chance");
    expect(result).toBe("Good night, Chance!");

    date.setHours(2);
    const result2 = greeter.greet("chance");
    expect(result2).toBe("Good night, Chance!");
  });

  test("should log into console when called", () => {
    expect(logger.log).not.toHaveBeenCalled();
    greeter.greet("Chance");
    expect(logger.log).toHaveBeenCalledTimes(1);
    expect(logger.log).toHaveBeenCalledWith("greeted Chance");
  });
});
