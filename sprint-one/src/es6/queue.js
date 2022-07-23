class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.total = 0;
    this.firstInLine = 0;
  }

  enqueue(value) {
    this.storage[this.total + this.firstInLine] = value;
    this.total++;
  }

  dequeue() {
    var lastVal = this.storage[this.firstInLine];
    this.total--;
    this.firstInLine++;
    return lastVal;
  }

  size() {
    if (this.total < 0) {
      return 0;
    }
    return this.total;
  }

}
