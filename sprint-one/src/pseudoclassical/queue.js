var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.total = 0;
  this.firstInLine = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.total + this.firstInLine] = value;
  this.total++;
}

Queue.prototype.dequeue = function() {
  var lastVal = this.storage[this.firstInLine];
  this.total--;
  this.firstInLine++;
  return lastVal;
}

Queue.prototype.size = function() {
  if (this.total < 0) {
    return 0;
  }
  return this.total;
}
