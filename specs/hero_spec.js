const assert = require('assert');
const Hero = require('../hero.js')

describe('hero', function() {

  let hero;

  beforeEach(function() {
    hero = new Hero('Super Kash', 100, 'Mac and Cheese', 'Super Kash to the rescue')
  });

  it('should have a name', function() {
    const actual = hero.name;
    assert.strictEqual(actual, 'Super Kash');
  });

  it('should have health', function() {
    const actual = hero.health;
    assert.strictEqual(actual, 100);
  });

  it('should have favourite food', function() {
    const actual = hero.fav_food;
    assert.strictEqual(actual, 'Mac and Cheese');
  });

  it('should have a superphrase', function() {
    const actual = hero.SuperPhrase;
    assert.strictEqual(actual, 'Super Kash to the rescue');
  });
});
