const fizzBuzz = require("./FizzBuzz");



describe("fizzBuzz", () => {
  beforeEach(()=>{
    global.console = {log: jest.fn()}
  })
  it('counts to 100', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledTimes(100)
  })

  it('prints fizz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledWith('Fizz')
  })

  it('prints buzz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenNthCalledWith(16,'Buzz')
  })

  it('prints fizzbuzz', ()=>{
    fizzBuzz()
    expect(console.log).toHaveBeenCalledWith('FizzBuzz')
  })
});
