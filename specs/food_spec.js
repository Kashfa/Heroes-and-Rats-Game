const assert = require('assert');
const Food = require('../food.js')

describe('food', function() {

  let food;

  beforeEach(function() {
    food = new Food('chips', 10 )
  });

  it('should have a food', function () {
    const actual = food.name;
    assert.strictEqual(actual, 'chips');
  });

  it('should have a replenishment level', function () {
    const actual = food.rep_value;
    assert.strictEqual(actual, 10);
  });
});
