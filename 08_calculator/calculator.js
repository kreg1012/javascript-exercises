const add = function(a,b) {
	return addedNum = a+b;
  
};

const subtract = function(a,b) {
	return subNum = a-b;
};

const sum = function(args) {
  return args.reduce((x,y) => x + y, 0);
};

const multiply = function(args) {
  return args.reduce((last,next) => last * next);

};

const power = function(start, exp) {
  if (start === 0) return 1;
  let final = 1;
  for (i = 0; i < exp; i++){
     final *= start;
  }
  return final;
};

const factorial = function(n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
