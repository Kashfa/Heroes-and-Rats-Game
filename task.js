const Task = function(difficulty_level, urgency_level, reward, task_status) {
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.task_status = false;
};

Task.prototype.markAsComplete = function () {
  this.task_status = true;
};


module.exports = Task;
