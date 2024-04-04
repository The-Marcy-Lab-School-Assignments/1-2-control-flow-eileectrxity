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

const funTypes = () => {
};

const rounder = () => {
};

const fizzBuzzish = () => {
};

module.exports = {
  measureRain,
  happyBirthdayPet,
  funTypes,
  rounder,
  fizzBuzzish,
};
