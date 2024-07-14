const reverseString = function(string) {
  let reversedArray = [];
  for (let i = 0; i < string.length; i++) {
    reversedArray[i] = string[string.length - i - 1];
  }
  let reversedString = "";
  for(let j = 0; j < string.length; j++) {
    reversedString += reversedArray[j];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
