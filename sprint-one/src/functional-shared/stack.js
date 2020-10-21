var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  _.extend(someInstance, stackMethods);
  return someInstance;
};

var stackMethods = {
  push: function(value) {
    var index = _.size(this.storage);
    this.storage[index] = value;
  },

  pop: function() {
    var indexToRemove = (_.size(this.storage) - 1).toString();
    var returnValue = this.storage[indexToRemove];
    delete this.storage[indexToRemove];
    return returnValue;
  },

  size: function () {
    return _.size(this.storage);
  }
};


