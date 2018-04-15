const assert = require('assert');
const Task = require('../task.js')

describe('task', function() {

  let task;

  beforeEach(function() {
    task = new Task(10, 'high', '100 gold bars')
  });

  it('should have a difficulty level', function() {
    const actual = task.difficulty_level;
    assert.strictEqual(actual, 10);
  });

  it('should have an urgency level', function() {
    const actual = task.urgency_level;
    assert.strictEqual(actual, 'high');
  });

  it('should have a reward', function() {
    const actual = task.reward;
    assert.strictEqual(actual, '100 gold bars');
  });

  it('should have task status', function() {
    const actual = task.task_status;
    assert.strictEqual(actual, false);
  });

  it('should complete task', function() {
    task.markAsComplete();
    assert.strictEqual(task.task_status, true);
  });



});
