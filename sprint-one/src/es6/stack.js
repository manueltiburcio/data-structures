class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter++;
  }

  pop() {
    this.counter--;
    var lastVal = this.storage[this.counter];
    return lastVal;
  }

  size() {
    if (this.counter < 0) {
      return 0;
    }
    return this.counter;
  }

}