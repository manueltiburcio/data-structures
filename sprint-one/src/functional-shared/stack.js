var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  _.extend(someInstance, stackMethods);

  someInstance.storage = {};
  someInstance.total = 0;

  return someInstance;
};

stackMethods = {

  push: function(value) {
    this.storage[this.total] = value;
    this.total++;
  },

  pop: function() {
    this.total--;
    var lastVal = this.storage[this.total];
    return lastVal;
  },

  size: function() {
    if (this.total < 0) {
      return 0;
    }
    return this.total;
  },


};
