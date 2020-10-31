var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};

  _.extend(someInstance, queueMethods);

  return someInstance;

};

var queueMethods = {
  enqueue: function (value) {
    var numOfItems = _.size(this.storage);
    for (var i = numOfItems - 1; i >= 0; i--) {
      this.storage[(i + 1).toString()] = this.storage[i.toString()];
    }

    this.storage['0'] = value;
  },

  dequeue: function () {
    var indexToRemove = (_.size(this.storage) - 1).toString();
    var returnValue = this.storage[indexToRemove];
    delete this.storage[indexToRemove];
    return returnValue;
  },

  size: function () {
    return _.size(this.storage);
  }
};


