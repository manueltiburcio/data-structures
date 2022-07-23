var Queue = function() {
  var someInstance = {};

  // enqueue(string) - Add a string to the back of the queue
  // dequeue() - Remove and return the string at the front of the queue
  // size() - Return the number of items in the queue


  // Use an object with numeric keys to store values
  var storage = {};
  var total = 0;
  var firstInLine = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // enqueue(string) - Add a string to the back of the queue
    storage[total + firstInLine] = value;
    total++;
  };

  someInstance.dequeue = function() {
    // dequeue() - Remove and return the string at the front of the queue
    total--;
    var lastVal = storage[firstInLine];
    firstInLine++

    if (total < 0) {
      total = 0;
    }
    return lastVal;
  };

  someInstance.size = function() {
    // size() - Return the number of items in the queue
    return total;
  };

  return someInstance;
};


