'use strict';


const { Stack, Queue } = require('../stacksAndQueues/stacks-and-queues.js');

const output = [];

class Node {
  constructor(value, left=null, right=null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor( root = null){
    this.root = root;
  }

  preOrder() {
    const output = [];
    function _preOrder(root) {
      if(!root) {
        return;
      }
      //add root's value to array
      output.push(root.value);
      //since we have null check it will return when there is no root left

      //if(root.left){}
      _preOrder(root.left);
      //if(root.right){}
      _preOrder(root.right);

    }
    _preOrder(this.root);

    return output;
  }

  inOrder(){
    const output = [];
    function _inOrder(root) {

      if(!root) {
        return;
      }
      _inOrder(root.left);
      output.push(root.value);

      _inOrder(root.right);
    }

    _inOrder(this.root);

    return output;
  }

  postOrder() {
    const output = [];
    function _postOrder(root) {

      if(!root) {
        return;
      }
      _postOrder(root.left);
      _postOrder(root.right);
      output.push(root.value);

    }

    _postOrder(this.root);

    return output;
  }

  findMaxValue(){
    let current = this.root;
    while(current.right !== null){
      current = current.right
    }
    return current.value;
  }


  breadthFirst(){
    let breadth = new Queue();
    let array = [];

    breadth.enqueue(this.root);

    while(breadth.peek()){

  breadthFirst(tree){
    let breadth = new Queue();
    let array = [];

    breadth.enqueue(tree.root);

    while(breadth.queue.length){

      let front = breadth.dequeue()
      array.push(front.value)
      if(front.left){
        breadth.enqueue(front.left)
      }
      if(front.right){
        breadth.enqueue(front.right)
      }
    }
    return array;
  }


}




}

// Create a BinarySearchTree class


// define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
// define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

class BinarySearchTree extends BinaryTree {
  // add(value) {
  //   const output = [];

  //   let newNode = new Node(value);
  //   while (this.left || this.right){
  //     if (this.root === null) {
  //       this.root = newNode;
  //     }
  //     if (newNode.value < this.root) {
  //       this.root = this.root.left;
  //     }
  //     if (newNode.value > this.root) {
  //       this.root = this.root.right;
  //     }
  //   }
  //   output.push(newNode);
  //   return output;
  // }
  add(value) {
    // make a new node
    // traverse and put node in the right spot
    const newNode = new Node(value);
    const _walk = (node) => {
      if(value < node.value) {
        if(!node.left) {
          node.left = newNode;
          return newNode;
        }
        _walk(node.left);
      }
      if(value > node.value) {
        if(!node.right) {
          node.right = newNode;
          return newNode;
        }
        _walk(node.right);
      }
    };
    _walk(this.root);
  }

  contains(value) {
    while(this.root) {
      if(this.root === value)
        return true;
      if(value > this.root) {
        this.root = this.right;
      }
      else if(value < this.root) {
        this.root = this.left;
      }
      else{
        return false;
      }
    }
  }
}




//contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.

module.exports = { BinaryTree, BinarySearchTree, Node };
