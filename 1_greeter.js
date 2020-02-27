class Greeter {
  constructor(getCurrentTimeMillisFn, logger) {
    this.getCurrentTimeMillisFn = getCurrentTimeMillisFn;
    this.logger = logger;
  }

  greet(name = "") {
    const formattedName = name.trim().replace(/^\w/, c => c.toUpperCase());

    const greetingResults = `${this.gatherIntro()}${
      name !== "" ? ", " + formattedName : ""
    }!`;

    this.logger.log(`greeted ${name}`);

    return greetingResults;
  }

  gatherIntro() {
    const currentTime = new Date(this.getCurrentTimeMillisFn());
    const hourOfDay = currentTime.getHours();

    const isMorning = hourOfDay >= 6 && hourOfDay < 12;
    const isEvening = hourOfDay >= 18 && hourOfDay < 22;
    const isNight =
      (hourOfDay >= 22 && hourOfDay < 24) || (hourOfDay >= 0 && hourOfDay < 6);

    let intro = "Hello";
    if (isMorning) intro = "Good Morning";
    if (isEvening) intro = "Good evening";
    if (isNight) intro = "Good night";

    return intro;
  }
}

module.exports = Greeter;
