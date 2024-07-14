const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((total, currentValue) => total += currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((total, currentValue) => total * currentValue, 1);
};

const power = function(a, b) {
  return a**b;	
};

const factorial = function(n) {
	if (n == 0) {
    return 1;
  }

  if (n == 1){
    return n;
  }
  return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
