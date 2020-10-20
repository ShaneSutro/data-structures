var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //I-OCE:
  //Input: a primitive value type
  //Output: a primitive value type
  //Constraints:
  //For enquque: should add a value to the front of the object
  //For deququq: should return a value from the end of the object
  //Edge cases
  //None?
  var numberOfItems = 0;
  someInstance.enqueue = function(value) {

    for (var key in storage) {
      if (Number(key + 1) > numberOfItems) {
        numberOfItems = Number(key + 1);
      }
    }
    if (numberOfItems > 0) {
      for (var i = numberOfItems - 1; i >= 0; i--) {
        var newKey = i + 1;
        storage['' + newKey] = storage[i.toString()];
      }
    }

    storage['0'] = value;

    return storage;
  };

  someInstance.dequeue = function() {
  };

  someInstance.size = function() {
    return numberOfItems + 1;
  };

  return someInstance;
};
