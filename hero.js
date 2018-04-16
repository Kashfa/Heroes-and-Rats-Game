const Hero = function(name, health, fav_food, SuperPhrase, task) {
  this.name = name;
  this.health = health;
  this.fav_food = fav_food
  this.SuperPhrase = SuperPhrase
  this.task = task
};

Hero.prototype.canEatFood = function(food){
  if (food.name === this.fav_food)
  {
    this.health += (food.rep_value * 1.5);
  }
  else
  {
    this.health += food.rep_value;
  }
  };

  Hero.prototype.sortTasksByDifficultyLevel = function(task)


module.exports = Hero;
