'use strict';
;

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

module.exports = { Vertex, Edge, Graph };



// console.log(graph.dft(two));


