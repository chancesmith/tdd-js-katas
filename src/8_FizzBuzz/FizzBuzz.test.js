const fizzBuzz = require("./FizzBuzz");



describe("fizzBuzz", () => {
  beforeEach(()=>{
    global.console = {log: jest.fn()}
  })
  it('should count to 100', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledTimes(100)
  })

  it('should print fizz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledWith('Fizz')
  })

  it('should print buzz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenNthCalledWith(16,'Buzz')
  })

  it('should print fizzbuzz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledWith('FizzBuzz')
  })
});
