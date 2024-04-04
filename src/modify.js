const wildlyBiasedReview = (location) => {
  if (location !== 'NYC') { //guard clause checks if a condition is not met first; if so, it will break out of the function instead of wasting computational resources running code just to see that the condition is not met
    return console.log('Yea that place is cool I guess'); //console.log needed to maintain the functionality of original function
} else if (location === 'NYC') {
    console.log('THE GREATEST CITY IN THE WORLD');
    console.log('THE CITY THAT NEVER SLEEPS');
    console.log('WOW WHAT A CITY');
    return
  }
};

// //first try: incorrect
// const wildlyBiasedReview = (location) => {
//   if (location !== 'NYC') return 'Yea that place is cool I guess';
//   if (location === 'NYC') return 'THE GREATEST CITY IN THE WORLD';

// //original code
// const wildlyBiasedReview = (location) => {
//   if (location === 'NYC') {
//     console.log('THE GREATEST CITY IN THE WORLD');
//     console.log('THE CITY THAT NEVER SLEEPS');
//     console.log('WOW WHAT A CITY');
//   } else {
//     console.log('Yea that place is cool I guess');
//   }
// };

module.exports = {
  wildlyBiasedReview,
};
