// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  const errorMsg = `"${actual}" != "${expected}"`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  }
  console.assert(actual === expected, errorMsg);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);