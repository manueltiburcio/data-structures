/*

The basic operations provided by a graph data structure G usually include:[1]

adjacent(G, x, y): tests whether there is an edge from the vertex x to the vertex y;
neighbors(G, x): lists all vertices y such that there is an edge from the vertex x to the vertex y;
add_vertex(G, x): adds the vertex x, if it is not there;
remove_vertex(G, x): removes the vertex x, if it is there;
add_edge(G, x, y, z): adds the edge z from the vertex x to the vertex y, if it is not there;
remove_edge(G, x, y): removes the edge from the vertex x to the vertex y, if it is there;
get_vertex_value(G, x): returns the value associated with the vertex x;
set_vertex_value(G, x, v): sets the value associated with the vertex x to v.
Structures that associate values to the edges usually also provide:[1]

get_edge_value(G, x, y): returns the value associated with the edge (x, y);
set_edge_value(G, x, y, v): sets the value associated with the edge (x, y) to v.

*/

// Instantiate a new graph
var Graph = function() {
  this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.storage.push({node: node, edges: []});
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let result = false;

  this.storage.forEach(function (element) {
    console.log(element);
    console.log(node);
    if (element.node === node) {
      result = true;
    }
  });

  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {

  // Remove 0 (zero) elements before index 2, and insert "drum"
  // let removed = myFish.splice(2, 0)

  this.storage.splice(this.storage.indexOf(node.node))
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this.storage[this.storage.indexOf(node.fromNode)].edges.indexOf(fromNode) === -1) {
    return false
  }
  return true;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  console.log(this.storage[this.storage.indexOf(fromNode)])
  this.storage[this.storage.indexOf(fromNode)].edges.push(toNode);
  this.storage[this.storage.indexOf(toNode)].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


