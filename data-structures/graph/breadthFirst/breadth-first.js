'use strict';

const { Vertex, Edge, Graph } = require('../graph.js');

new class bft extends Graph {
  constructor(){
    super()
  }
  ///////BREADTH FIRST//////
  bft(startNode) {

    const queue = [];

    //SET is a hashmap that only stores unique keys, no their values
    const visitedNodes = new Set();

    queue.push(startNode);

    visitedNodes.add(startNode);

    //in real queue, this would be a while queue.peek()
    while( queue.length) {

      const currentVertex = queue.shift();
      const neighbors = this.adjacenclyList.get(currentVertex);
      // neighbors.forEach( neighbor .... )
      // for(let i = 0; i < neighbors.length; i++ ) { }
      for( let neighbor of neighbors){
        const neighborVertex = neighbor.vertex;
        if( visitedNodes.has(neighborVertex)) {
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        queue.push(neighborVertex);
      }
    }
    return visitedNodes;
  }

}
const graph = new Graph();

const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
const nine = new Vertex(9);

graph.addVertex(ten);
graph.addVertex(two);
graph.addVertex(six);
graph.addVertex(seven);
graph.addVertex(three);
graph.addVertex(eight);
graph.addVertex(nine);

graph.addUndirectedEdge(ten, two);
graph.addUndirectedEdge(ten, six);
graph.addUndirectedEdge(ten, three);
graph.addUndirectedEdge(six, seven);
graph.addUndirectedEdge(six, eight);
graph.addUndirectedEdge(three, eight);
graph.addUndirectedEdge(seven, eight);
graph.addUndirectedEdge(seven, nine);
graph.addUndirectedEdge(two, seven);

console.log(graph);

console.log(graph.bft(ten));
console.log(graph.bft(seven));

// module.exports = bft;


