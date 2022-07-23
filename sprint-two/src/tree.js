  // .children property, an array containing a number of subtrees
var Tree = function(value) {
  var newTree = {};
  newTree.value = value; // why we have this?
  newTree.children = [];  // fix me |
  _.extend(newTree, treeMethods);
  // console.log(value);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //  .addChild() method,
  // takes any value, sets that as the target of a node, and adds that node as a child of the tree

  // tree.children[0]

  // tree.addChild(5); // add child value 5 + tree to top parent
  // expect(tree.children[0].value).to.equal(5);


  // tree.addChild(5);
  // tree.children[0].addChild(6);


  this.children.push(Tree(value));



  // this.children[value];
  // tree.children[0].value) 5
  // tree.children[0] <<

  // const checkTree = function(currentTree) {
  //   // if current tree has children and its length is not zero
  //   if (currentTree.children && currentTree.children.length !== 0) {
  //     // iterate through the children array, and recursive call each subtree
  //       for (let i = 0; i < currentTree.children.length; i++) {
  //           checkTree(currentTree.children[i]);
  //       }
  //   } else {

  //       currentTree.children.push({value: value, children: []});
  //   }
  // }

          //this.children(value); // this create the children

        // this.children.push({value: value, children: []});



  // checkTree(this);
  // console.log('after', this);
};

treeMethods.contains = function(target) {
  // .contains() method,
  // takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node

  let result = false;

  // helper function


  const findTarget = function(currentChildren) {
    if (currentChildren.value === target) {
      result = true;
    }

    if (currentChildren.children) {
      currentChildren.children.forEach(function (child) {
        result = findTarget(child);
      });
    }

    return result;
  }


  result = findTarget(this);
  return result;
};



/*

A tree is a hierarchical data structure consisting of a node (potentially) with children. The children are trees unto themselves, that is, nodes with (potential) children. For this reason the tree is referred to as a recursive data structure.

*/

/*
 * Complexity: What is the time complexity of the above functions?
 */


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