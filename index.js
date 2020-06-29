// index.js
const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require("./eqArrays");
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const eqObjects = require('./eqObjects');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  eqArrays,
  assertEqual,
  assertObjectsEqual,
  eqObjects,
  countLetters,
  countOnly,
  findKey,
  findKeyByValue,
  letterPositions,
  map,
  takeUntil,
  without,
};