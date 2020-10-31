class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
  }

  push(value) {
    var writeIndex = _.size(this.storage);
    this.storage[writeIndex] = value;
  }

  pop() {
    var indexToDelete = (_.size(this.storage) - 1).toString();
    var valueToReturn = this.storage[indexToDelete];
    delete this.storage[indexToDelete];
    return valueToReturn;
  }

  size() {
    return _.size(this.storage);
  }
}
