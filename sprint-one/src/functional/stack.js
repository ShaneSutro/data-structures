var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = -1;
  var numberOfItems = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[_.size(storage).toString()] = value;

  };

  someInstance.pop = function() {
    var indexToPop = (_.size(storage) - 1).toString();
    var returnValue = storage[indexToPop];
    delete storage[indexToPop];
    return returnValue;
  };

  someInstance.size = function() {
    return _.size(storage);
  };

  return someInstance;
};
