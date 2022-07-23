var BinarySearchTree = function(value) {
  var obj = Object.create(BinaryTreeMethods);
  obj.value = value;
  obj.right = null;
  obj.left = null;
  return obj;
};

var BinaryTreeMethods = {};

// depthFirstLog() method, which accepts a callback and executes it on every value contained in the tree.
BinaryTreeMethods.depthFirstLog = function(cb) {

  const checkTree2 = function(callbk, currentObj) {
    console.log(currentObj);
    callbk(currentObj.value);
    if (currentObj.left !== null) {
      checkTree2(callbk, currentObj.left);
    }
    if (currentObj.right !== null) {
      checkTree2(callbk, currentObj.right);
    }

  }
  checkTree2(cb, this);
}

// .contains() method, which accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
BinaryTreeMethods.contains = function(target) {

  const findTarget = function(value, currentObj){
    if (value === currentObj.value) {
      return true;
    }

    if (value < currentObj.value && currentObj.left !== null) {
      return findTarget(value, currentObj.left);
    }

    if (value > currentObj.value && currentObj.right !== null) {
      return findTarget(value, currentObj.right);
    }

    return false;
  }

  return findTarget(target, this)

}

// .insert() method, which accepts a value and places it in the tree in the correct position.
BinaryTreeMethods.insert = function(inputValue) {

  const checkTree = function(newVal, currentObj) {
    if (newVal < currentObj.value) {
      if (currentObj.left !== null) {
        return checkTree(newVal, currentObj.left);
      } else if (currentObj.left === null) {
        return currentObj.left = BinarySearchTree(newVal)
      }
    }
    if (newVal > currentObj.value) {
      if (currentObj.right !== null) {
        return checkTree(newVal, currentObj.right);
      } else if (currentObj.right === null) {
        return currentObj.right = BinarySearchTree(newVal)
      }
    }
  }
  checkTree(inputValue, this);
  // checkTree (2, 5)
}

  //const checkTree = function(currentTree) {
    // base case: if currentTree.value is target value, add children
    // console.log('currentTree value:', currentTree.value);
      // if (currentTree.value === value) {
      //   console.log('test');
      //   // if value from addchild function
      //   currentTree.children.push({value: value, children: []});
      // }
      // console.log('children', currentTree.children);
      // if (currentTree.children && currentTree.children.length !== 0) {
      //   // if current tree has children, iterate through them and check
      //   for (let i = 0; i < currentTree.children.length; i++) {
      //     return checkTree(currentTree.children[i]);
      //   }
      // } else {
        // catch all if current tree does not have any children, and cant find the value

/*
 * Complexity: What is the time complexity of the above functions?
 */
