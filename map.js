const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed: The arrays are equal");
    return array1 + " = " + array2;
  } else {
    console.log("Assertion Failed: The arrays are not equal");
    return array1 + " != " + array2;
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  } return true;
};

const results1 = map(words, word => word[0]);

console.log(results1);
console.log(assertArraysEqual(map(words, word => word[0]), words));
console.log(assertArraysEqual(results1, results1));
console.log(assertArraysEqual(map(words, word => word[0]), results1));
console.log(assertArraysEqual(map(words, word => word[1]), results1));