const add = function(x,y) {
	return x + y
};

const subtract = function(x,y) {
	return x - y
};

const sum = function(array) {
	return array.reduce((previousValue,currentValue) => previousValue + currentValue,0)
};

const multiply = function(array) {
  return array.reduce((previousValue,currentValue) => previousValue * currentValue,1)
};

const power = function(x,y) {
	return Math.pow(x,y)
};

const factorial = function(x) {
  acc = 1
	for (let i = x; i > 0; i--) {
    acc = acc * i
  }
  return acc
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
