const assertEqual = function(actual, expected) {
  const errorMsg = `"${actual}" != "${expected}"`;
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
    return actual;
  }
  console.assert(actual === expected, errorMsg);
  return actual;
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual((eqObjects(ab, ba)), true)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual((eqObjects(ab, abc)), false)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual((eqObjects(cd, dc)), true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual((eqObjects(cd, cd2)), false)); // => false