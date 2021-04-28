// Your task
// Write a program that prints one line for each number from 1 to 100
// For multiples of three print Fizz instead of the number
// For the multiples of five print Buzz instead of the number
// For numbers which are multiples of both three and five print FizzBuzz instead of the number

function fizzBuzz(startNumber){
  if(startNumber === 0) {
    console.log(startNumber);
    return;
  }
  for (let printNum = 0; printNum <= startNumber; printNum++) {
    const newNumber = startNumber - printNum
    if(newNumber % 3 === 0 && newNumber % 5 === 0) console.log('FizzBuzz')
    else if(newNumber % 3 === 0) console.log('Fizz')
    else if(newNumber % 5 === 0) console.log('Buzz')
    else console.log(newNumber)
  }
}

module.exports = fizzBuzz;
