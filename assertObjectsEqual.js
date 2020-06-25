const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let k in object1) {
    if (Array.isArray(object1[k]) && Array.isArray(object2[k])) {
      if (eqArrays(object1[k], object2[k]) === false) {
        return false;
      }
    } else if (object1[k] !== object2[k]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  let result = 0;
  if (array1.length !== array2.length) {
    return false;
  }
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const obj1 = { a: '1', b: 2 };
const obj2 = { b: 2, a: '1' };
const obj3 = { a: '1', b: 2 };
const obj4 = { b: 2, a: '5' };

assertObjectsEqual(obj1, obj2);
assertObjectsEqual(obj3, obj4);