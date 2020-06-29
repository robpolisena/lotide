// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMsg = `Assertion Failed: "${actual}" != "${expected}"`;
  if (actual === expected) {
    return `Assertion Passed: ${actual} === ${expected}`;
  }
  return (actual === expected, errorMsg);
};


module.exports = assertEqual;