//Lesson 1-2 Assignment: Control Flow by Eileen
//mostly using console.logs as expected, rather than return statements

/*Question 1: a function that takes a single argument, a number, inches; should log a message depending on the number of inches:
  0 inches - 'drought'
  less than 2 inches - 'dry'
  less than 4 inches - 'average'
  less than 6 inches - 'rainy'
  6 or more inches - 'flood'
*/
//using else if statements to log a message depending on number of inches given
const measureRain = (inches) => {
  if (inches === 0) {
    console.log('drought');
  } else if (inches > 0 && inches < 2) { //fixed inches from being < 0 to > 0 so that values between (but not including) 0 and 2 can be captured 
    console.log('dry');
  } else if (inches >= 2 && inches < 4) {
    console.log('average');
  } else if (inches >= 4 && inches < 6) {
    console.log('rainy');
  } else if (inches >= 6) {
    console.log('flood');
  };
};

measureRain(0); // "drought"
measureRain(1); // "dry"
measureRain(2); // "average"
measureRain(4); // "rainy"

/*Question 2: a function that takes two arguments, a string, breed and a number, age; should log a message in the following situations:
  'snake', any age - 'Hiss hiss!'
  'cat', less than 5 - 'Mew mew!'
  'cat', 5 or more - 'Meow meow!'
  'dog', less than 5 - 'Arf arf!'
  'dog', 5 to less than 10 - 'Woof woof!'
  'dog', 10 or more - 'Boof!' By default, just log a message of 'Happy birthday!'
*/

const happyBirthdayPet = (breed, age) => {
  if (breed === 'snake') {
    console.log('Hiss hiss!');
  } else if (breed === 'cat') {
    if (age < 5) {
      console.log('Mew mew!');
    } else if (age >= 5) {
      console.log('Meow meow!'); 
    }
  } else if (breed === 'dog') {
    if (age < 5) {
      console.log('Arf arf!'); //fixed return string from being 'Arf Arf' to 'Arf arf'; must be careful about capitalization!
    } else if (age >= 5 && age < 10) {
      console.log('Woof woof!'); 
    } else if (age >= 10) {
      console.log('Boof!');
    };
  } else console.log('Happy birthday!');
};

happyBirthdayPet('snake', 3); // "Hiss hiss!"
happyBirthdayPet('cat', 2); // "Mew mew!"
happyBirthdayPet('dog', 6); // "Arf arf!"

/*Question 3: a function that takes an argument, jsType. the type could be one of the following: a string, a number, a boolean, undefined, null, an object, an array, or NaN; should log a message in the following situations:
  any string - "That's just some text."
  any number - "That's a good number."
  a boolean - "To bool, or not to bool?"
  undefined - "Nothing, but I didn't set that."
  null - "Nothing, and I did set that."
  an object - "Anybody got the key?"
  an array - "I order you to be indexed."
  NaN - "Well, now you're just showing off."
*/
//specific conditions should be evaluated first (like special values, subtypes, and edge cases), and generic/more vague things evaluated after. just like in a guard clause, best practice is to run what should evaluates false first
const funTypes = (jsType) => {
  // console.log(jsType) //testing for control flow understanding
  if (Number.isNaN(jsType)) { //NaN condition has to be checked before number because typeof NaN === 'number' (JS considers NaN a number)
    console.log("Well, now you're just showing off.");
  } else if (typeof jsType === 'number') {
    console.log("That's a good number.");
  } else if (typeof jsType === 'undefined') {
    console.log("Nothing, but I didn't set that.");
  } else if (jsType === null) {
    console.log("Nothing, and I did set that.");
  } else if (typeof jsType === 'boolean') {
    console.log("To bool, or not to bool?");
  } else if (typeof jsType === 'string') { //reordered to be checked later as data type is generic. also corrected to check for JS string type rather than '' (an empty string)
    console.log('That\'s just some text.'); //practicing backticks
  } else if (Array.isArray(jsType)) { //like NaN before number types, arrays must be checked before object types. in JS, arrays are considered a type of objects
    console.log("I order you to be indexed.");
  } else if (typeof jsType === 'object') {
    console.log("Anybody got the key?");
  };
};

funTypes('hello'); // "That's just some text."
funTypes(NaN); // "Well, now you're just showing off."
funTypes([]); // "I order you to be indexed."
funTypes(3); // "That's a good number."

/*Question 4: a function rounder that takes two arguments: a float, float and a string, roundingSetting. roundingSetting could be only one of 3 values up, down, or honest. it should RETURN an integer based off the following value of roundingSetting:
  up - the float rounded up
  down - the float rounded down
  honest - the float rounded up or down depending on the rounding rules (< .5 round down, >= .5 round up)
*/
//added a guard clause in the beginning in case roundingSetting condition is not met
const rounder = (float, roundingSetting) => {
  if (roundingSetting !== 'up' && roundingSetting !== 'down' && roundingSetting !== 'honest') {
    return "Only round 'up', 'down', or 'honest' please c:";
  } else if (roundingSetting === 'up') {
    return Math.ceil(float); //round given float number up
  } else if (roundingSetting === 'down') {
    return Math.floor(float); //round given float number down
  } else if (roundingSetting === 'honest') {
    return Math.round(float); //rounding given float number according to standard mathematical rules
  };
};

console.log(rounder(5.7, 'up')); // 6
console.log(rounder(1.0, 'down')); // 1
console.log(rounder(3.5, 'honest')); // 4

/*Question 5: a function that takes a single argument: an integer, num; should log a message in the following situations:
  number is divisible by 3 - 'fizz'
  number is divisible by 5 - 'buzz'
  number is divisible by both 3 and 5 - 'fizzBuzz!'
  number is none of those - just log the number
*/
//using if else statements with explicit conditions provided
const fizzBuzzish = (num) => {
  if (num % 3 === 0 && num % 5 !== 0) {
    console.log("fizz");
  } else if (num % 5 === 0 && num % 3 !== 0) {
    console.log("buzz");
  } else if (num % 3 === 0 && num % 5 === 0) {
    console.log("fizzBuzz!");
  } else {
    console.log(num);
  };
};

// //alt solution a: first try - not as good as solution above due to less explicit conditions
// const fizzBuzzish = (num) => {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("fizzBuzz!");
//   } else if (num % 3 === 0) {
//     console.log("fizz");
//   } else if (num % 5 === 0) {
//     console.log("buzz");
//   } else console.log(num);
// };

fizzBuzzish(15); //returns FizzBuzz
fizzBuzzish(3); //returns Fizz
fizzBuzzish(32); //returns Buzz

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
