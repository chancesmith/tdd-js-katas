const fizzBuzz = require("./FizzBuzz");



describe("fizzBuzz", () => {
  beforeEach(()=>{
    global.console = {log: jest.fn()}
  })
  it('should count to zero from zero', ()=>{
    fizzBuzz(0)
    expect(console.log).toHaveBeenCalledTimes(1)
  })
  it('should count to zero from 1', ()=>{
    fizzBuzz(1)
    expect(console.log).toHaveBeenCalledTimes(2)
  })

  it('should print fizz', ()=>{
    fizzBuzz(12)
    expect(console.log).toHaveBeenCalledTimes(13)
    expect(console.log).toHaveBeenCalledWith('Fizz')
  })

  it('should print buzz', ()=>{
    fizzBuzz(12)
    expect(console.log).toHaveBeenCalledTimes(13)
    expect(console.log).toHaveBeenCalledWith('Buzz')
  })

  fit('should print fizzbuzz', ()=>{
    fizzBuzz(12)
    expect(console.log).toHaveBeenCalledTimes(13)
    expect(console.log).toHaveBeenCalledWith('FizzBuzz')
  })
});
