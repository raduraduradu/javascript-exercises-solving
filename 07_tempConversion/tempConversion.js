const convertToCelsius = function(num) {
  let convertedNumber = (num - 32) * (5 / 9);
  convertedNumber = Math.round(convertedNumber * 10) / 10;
  return convertedNumber;
};

const convertToFahrenheit = function(num) {
  let convertedNumber = (num * (9/5) + 32);
  convertedNumber = Math.round(convertedNumber * 10) / 10;
  return convertedNumber;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
