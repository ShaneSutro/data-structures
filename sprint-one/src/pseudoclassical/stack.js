var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function(value) {
  var index = _.size(this.storage);
  this.storage[index] = value;
};

Stack.prototype.pop = function() {
  var indexToPop = (_.size(this.storage) - 1).toString();
  var returnValue = this.storage[indexToPop];
  delete this.storage[indexToPop];
  return returnValue;
};

Stack.prototype.size = function() {
  return _.size(this.storage);
};