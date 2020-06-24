const eqArrays = function(array1, array2) {
  let result = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      result += 1;
    } else {
      result += 0;
    }
  }
  if (result === 0) {
    return true;
  } else {
    return false;
  }
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log("Assertion Passed: The arrays are equal");
  } else {
    console.log("Assertion Failed: The arrays are not equal");
  }
};

const letterPositions = function(sentence) {
  const result = {};
  for (let i in sentence) {
    if (sentence[i] !== ' ') {
      if (result[sentence[i]]) {
        result[sentence[i]].push(Number(i));
      } else {
        result[sentence[i]] = [Number(i)];
      }
    }
  } return result;
};

const string = 'lighthouse in the house';
console.log(letterPositions(string));

assertArraysEqual(letterPositions("lighthouse in the house").g, [2]);
  
