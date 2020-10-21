var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var numberOfItems = _.size(this.storage);
  for (var i = numberOfItems - 1; i >= 0; i--) {
    this.storage[i + 1] = this.storage[i];
  }

  this.storage['0'] = value;
};

Queue.prototype.dequeue = function() {
  var indexToRemove = (_.size(this.storage) - 1).toString();
  var returnValue = this.storage[indexToRemove];
  delete this.storage[indexToRemove];
  return returnValue;
};

Queue.prototype.size = function() {
  return _.size(this.storage);
};