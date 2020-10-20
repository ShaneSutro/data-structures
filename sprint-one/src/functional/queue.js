var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  //For enqueue:
  //Get the number of items
  //Shift everything up one
  //Add value at index 0
  //update numberOfItems counter

  //For dequeue:
  //Using numberOfItems, set index to numberOfItems - 1
  //Use index to remove the last value from the array, delete it, then return it

  var numberOfItems = 0;
  var index = -1;

  someInstance.enqueue = function(value) {
    index = 0;
    for (var key in storage) {
      if (Number(key) > index) {
        numberOfItems = Number(key + 1);
        index = Number(key);
      }
    }
    if (numberOfItems > 0) {
      for (var i = numberOfItems - 1; i >= 0; i--) {
        var newKey = i + 1;
        storage['' + newKey] = storage[i.toString()];
      }
    }

    storage['0'] = value;
    numberOfItems++;
  };

  someInstance.dequeue = function() {
    var indexToReturn = (numberOfItems - 1).toString();
    var returnValue = storage[indexToReturn];
    delete storage[indexToReturn];
    numberOfItems--;
    numberOfItems < 0 ? numberOfItems = 0 : numberOfItems;
    console.log(numberOfItems, index, returnValue);
    return returnValue;
  };

  someInstance.size = function() {
    return numberOfItems;
  };

  return someInstance;
};
