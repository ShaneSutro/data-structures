var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  var numberOfItems = 0;
  var index = -1;

  someInstance.enqueue = function(value) {
    var numberOfItems = _.size(storage);
    for (var i = numberOfItems - 1; i >= 0; i--) {
      var newKey = i + 1;
      storage['' + newKey] = storage[i.toString()];
    }

    storage['0'] = value;
  };

  someInstance.dequeue = function() {
    var indexToRemove = (_.size(storage) - 1).toString();
    var returnValue = storage[indexToRemove];
    delete storage[indexToRemove];
    return returnValue;
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
