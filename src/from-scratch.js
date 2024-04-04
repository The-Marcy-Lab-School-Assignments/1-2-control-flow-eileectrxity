//Lesson 1-2 Assignment: Control Flow by Eileen

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
    return 'drought';
  } else if (inches < 0 && inches < 2) {
    return 'dry';
  } else if (inches >= 2 && inches < 4) {
    return 'average';
  } else if (inches >= 4 && inches < 6) {
    return 'rainy';
  } else if (inches >= 6) {
    return 'flood';
  };
};

console.log(measureRain(0)); // "drought"
console.log(measureRain(3)); // "average"
console.log(measureRain(4)); // "rainy"

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
    return 'Hiss hiss!';
  } else if (breed === 'cat') {
    if (age < 5) {
      return 'Mew mew!';
    } else if (age >= 5) {
      return 'Meow meow!'; 
    }
  } else if (breed === 'dog') {
    if (age < 5) {
      return 'Arf Arf!';
    } else if (age >= 5 && age < 10) {
      return 'Woof woof!'; 
    } else if (age >= 10) {
      return 'Boof!';
    };
  } else return 'Happy birthday!';
};

console.log(happyBirthdayPet('snake', 3)); // "Hiss hiss!"
console.log(happyBirthdayPet('cat', 2)); // "Mew mew!"
console.log(happyBirthdayPet('dog', 12)); // "Boof!"

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
const funTypes = (jsType) => {
  // console.log(jsType) //testing for control flow understand
  if (typeof jsType === '') {
    return 'That\'s just some text.'; //practicing backticks
  } else if (Number.isNaN(jsType)) { //has to be checked before number
    return "Well, now you're just showing off.";
  } else if (typeof jsType === 'number') {
    return "That's a good number.";
  } else if (typeof jsType === 'boolean') {
    return "To bool, or not to bool?";
  } else if (typeof jsType === 'undefined') {
    return "Nothing, but I didn't set that.";
  } else if (jsType === null) {
    return "Nothing, and I did set that.";
  } else if (Array.isArray(jsType)) { //array check should be before object check as an array is considered an object; ([]) doesn't work as it's considered an oject
    return "I order you to be indexed.";
  } else if (typeof jsType === 'object') {
    return "Anybody got the key?";
  };
};

console.log(funTypes(NaN)); // "Well, now you're just showing off."
console.log(funTypes([1,2])); // "I order you to be indexed."
console.log(funTypes(3)); // "That's a good number."

/*Question 4: a function rounder that takes two arguments: a float, float and a string, roundingSetting. roundingSetting could be only one of 3 values up, down, or honest. it should RETURN an integer based off the following value of roundingSetting:
  up - the float rounded up
  down - the float rounded down
  honest - the float rounded up or down depending on the rounding rules (< .5 round down, >= .5 round up)
*/

const rounder = (float, roundingSetting) => {
  if (roundingSetting === 'up') {
    return Math.ceil(float);
  } else if (roundingSetting === 'down') {
    return Math.floor(float);
  } else if (roundingSetting === 'honest') {
    return Math.round(float);
  }
  else return "Only round 'up', 'down', or 'honest' please c:";
};
console.log(rounder(5.7, 'up')); // 6
console.log(rounder(1.0, 'down')); // 1
console.log(rounder(3.2, 'honest')); // 3
console.log(rounder(3.6, 'honest')); // 4

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
