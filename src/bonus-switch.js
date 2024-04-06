//Bonus: refactored code into switch cases

const measureRainSwitch = (inches) => {
  switch (true) {
    case inches === 0:
      console.log('drought');
      break; //important not to forget break lines or else code will fall through and log all the conditions after just the first true is met
    case inches > 0 && inches < 2:
      console.log('dry');
      break;
    case inches >= 2 && inches < 4:
      console.log('average');
      break;
    case inches >= 4 && inches < 6:
      console.log('rainy');
      break;
    case inches >= 6:
      console.log('flood');
      break;
    default: //can be left empty
  };
};

const rounderSwitch = (float, roundingSetting) => {
  switch (roundingSetting) {
    case 'up':
      return Math.ceil(float);
      break;
    case 'down':
      return Math.floor(float);
      break;
    case 'honest':
      return Math.round(float);
      break;
    default:
      return "Only round 'up', 'down', or 'honest' please c:"
  };
};

module.exports = {
  measureRainSwitch,
  rounderSwitch,
};
