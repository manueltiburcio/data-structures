var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

//An .add() method, takes any string and adds it to the set
setPrototype.add = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    this._storage[item] = 1;
  }
};

//A .contains() method, takes any string and returns a boolean reflecting whether it can be found in the set
setPrototype.contains = function(item) {
  if (!this._storage.hasOwnProperty(item)) {
    return false;
  }
  return true;
};

//A .remove() method, takes any string and removes it from the set, if present
setPrototype.remove = function(item) {
  if (this._storage.hasOwnProperty(item)) {
    delete this._storage[item];
  }
};

// Note: Sets should not use up any more space than necessary. Once a value is added to a set, adding it a second time should not increase the size of the set.

/*
 * Complexity: What is the time complexity of the above functions?
 */
