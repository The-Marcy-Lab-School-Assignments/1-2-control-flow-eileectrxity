// //original function; instead of taking 2 integers, an inclusive min and exclusive max, and returning a random number in that range, it returns a random number from 0 to the max.
// const getRandomIntInRange = (min, max) => {
//   if (min > max) throw new Error('min must be less than max');
//   return Math.floor(Math.random() * max); //returns the rounded down number of ((a randomly generated number greater than 0 but less than 1 by the Math.random() method) multiplied by (the 'max' integer passed))
// };

//fixed function so that it operates within the mathematical range provided by the arguments
const getRandomIntInRange = (min, max) => {
  if (min > max) throw new Error('min must be less than max');
  let range = max - min //storing the difference between the max and min given values, representing the length of the range
    return Math.floor(Math.random() * range + min); //getting the product of a random number between 0 and 1 and the range length of the given arguments then adding that to the minimum value. adding min to the product ensures the random number starts at the min value, shifting the range to include numbers from the inclusive min up to the exclusive max value
};

// //first try: misinterpreted question, thinking that range meant an interval of numbers between min and max rather than the mathematical range despite the assinment title hint. had 'fixed' function with a for loop so that it operates within the range provided by the arguments but ultimately was wrong
// const getRandomIntInRange = (min, max) => {
//   if (min > max) throw new Error('min must be less than max'); //guard clause making sure that the number argument passed for parameter 'min' is in fact less than the number argument passed for parameter 'max'
//   let range = 0
//   for (let i = min; i < max; i++) { //for loop condition establishes index starting at a given min up to but (not including) a given max (as it's meant to be exclusive)
//     range = i; //mistakenly thought that this would update the var 'range' to return all the numbers, i, ranging from the min up to the max - 1 so that it can be used as a random generator between min and max in the operation below
//   }
//     return Math.floor(Math.random() * range); //returns a random, rounded down number between the min and max range
// };

console.log(getRandomIntInRange(3,8)) //logs a random number with the lowest being 3 and the highest being 7 or max - 1

const coolnessGauge = (numOfFridges) => {
  return numOfFridges > 5 ? 'You need more fridges.' : 'You are downright chilly!';
};

const funkoPopAddictionLevel = (numOfFunkoPops) => {
  if (numOfFunkoPops === 0) {
    console.log('No pops? Maybe try one.');
  } else if (numOfFunkoPops >= 1) {
    console.log('Only a few? Keep having fun!');
  } else if (numOfFunkoPops > 10) {
    console.log('You have a problem.');
  } else if (numOfFunkoPops > 20) {
    console.log('You need help!');
  } else {
    console.log('You need an intervention!!!');
  }
};

const getWeatherReport = (temperature) => {
  if (temperature > 90) {
    const weatherReport = "It's hot and gross out.";
    console.log(weatherReport);
  } else if (temperature > 70) {
    const weatherReport = "At least it's a dry heat.";
    console.log(weatherReport);
  } else if (temperature < 32) {
    const weatherReport = "Wow, it's cold out.";
    console.log(weatherReport);
  }
  console.log("And that's your report!");
  return weatherReport;
};

const returnPositiveNegativeZero = (num) => {
  return num < 0
    ? "Positive"
    : num === 0
      ? "Zero"
      : "Negative";
};

module.exports = {
  getRandomIntInRange,
  coolnessGauge,
  funkoPopAddictionLevel,
  getWeatherReport,
  returnPositiveNegativeZero,
};
