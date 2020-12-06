'use strict';

class Vertex {
  constructor(value){
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    // JS: Map has a set of keys and values (hashtable)
    this.adjacenclyList = new Map();
  }

  addVertex(vertex) {
    this.adjacenclyList.set(vertex, []);
  }

  addDirectEdge(startVertex, endVertex) {
    if( this.adjacenclyList.has(startVertex) && this.adjacenclyList.has(endVertex)){
      const neighbors = this.adjacenclyList.get(startVertex);
      neighbors.push(new Edge(endVertex));
    }
  }

  addUndirectedEdge(startVertex, endVertex) {
    this.addDirectEdge(startVertex, endVertex);
    this.addDirectEdge(endVertex, startVertex);
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

  //////DEPTH FIRST/////
  dft(startNode) {

    const stack = [];

    const visitedNodes = new Set();

    stack.push(startNode);

    while( stack.length) {
      const currentVertex = stack.pop();
      const neighbors = this.adjacenclyList.get(currentVertex);

      if(!visitedNodes.has(currentVertex)) {
        visitedNodes.add(currentVertex);
      }

      for(let neighbor of neighbors){
        const neighborVertex = neighbor.vertex;
        if(visitedNodes.has(neighborVertex)){
          continue;
        } else {
          visitedNodes.add(neighborVertex);
        }
        stack.push(neighborVertex);
      }
    }

    return visitedNodes;
  }

  getNeighbors(vertex) {
    return this.adjacenclyList.get(vertex)
  }
}

// module.exports = { Vertex, Edge, Graph };

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

console.log(graph.dft(two));

