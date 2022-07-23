var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  //  .addToTail() method, takes a value and adds it to the end of the list
  list.addToTail = function(value) {
    // if tail is null
    if (list.tail === null) {
      // assign new node as tail
      list.tail = Node(value);
      // if head is also null, assign head to same value;
      if (list.head === null) {
        list.head = list.tail;
      }
      // else if tail is not null, assin current to head, then assign new value as tail
    } else if (list.head === list.tail){
      list.tail = Node(value);
      // assign heads reference to point to tail
      list.head.next = list.tail;
    } else {
      list.tail.next = Node(value)
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function() {
    // .removeHead() method, removes the first node from the list and returns its value
    if (list.head !== null) {
      let headValue = list.head.value;
      if (list.head.next !== null) {
        list.head.value = list.head.next.value;
        list.head.next = list.head.next.next;
        return headValue;
      } else {
        list.head = null;
        list.tail = null;
        return headValue;
      }
    }
  };

  list.contains = function(target) {
    // .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
    const checkValue = function(inputObj) {
      if (target === inputObj.value) {
          return true;
      }
      if (inputObj.value !== target && inputObj.next === null) {
          return false;
      } else {
        return checkValue(inputObj.next);
      }
    }
    let result = checkValue(list.head);
    return result;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// i
// o
// c
// e

// a linked list is a linear collection of data elements whose order is not given by their physical placement in memory. Instead, each element points to the next. It is a data structure consisting of a collection of nodes which together represent a sequence. In its most basic form, each node contains: data, and a reference (in other words, a link) to the next node in the sequence.
