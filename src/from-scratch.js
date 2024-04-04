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

const happyBirthdayPet = () => {
};

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
