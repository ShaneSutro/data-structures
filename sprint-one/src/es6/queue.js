class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  enqueue(value) {
    var numberOfItems = _.size(this.storage);
    for (var i = numberOfItems - 1; i >= 0; i--) {
      this.storage[i + 1] = this.storage[i];
    }

    this.storage['0'] = value;
  }

  dequeue() {
    var indexToDelete = (_.size(this.storage) - 1).toString();
    var valueToReturn = this.storage[indexToDelete];
    delete this.storage[indexToDelete];
    return valueToReturn;
  }

  size() {
    return _.size(this.storage);
  }

}
