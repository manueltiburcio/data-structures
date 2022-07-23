var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.total = 0;
  someInstance.firstInLine = 0;

  return someInstance;

};

var queueMethods = {

  enqueue: function(value) {
    this.storage[this.total + this.firstInLine] = value;
    this.total++;
  },

  dequeue: function() {
    var lastVal = this.storage[this.firstInLine];
    this.firstInLine++;
    this.total--;
    return lastVal;
  },

  size: function() {
    if (this.total < 0) {
      return 0;
    }
    return this.total;
  },

};


