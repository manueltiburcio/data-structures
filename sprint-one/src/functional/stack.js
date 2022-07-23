var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    total++;
    storage[total] = value;
  };

  someInstance.pop = function() {
    var lastVal = storage[total];
    total--;
    return lastVal;
  };

  someInstance.size = function() {
    if (total < 0) {
      return 0;
    }
    return total;
  };

  return someInstance;
};
