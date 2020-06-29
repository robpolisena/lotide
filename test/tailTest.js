// test/test.js
const assert = require('chai').assert;
const tail = require('../tail');
const assertEqual = require('../assertEqual');


describe("#tail", () => {
  it("returns last two elements of the original array", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"]; 
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});