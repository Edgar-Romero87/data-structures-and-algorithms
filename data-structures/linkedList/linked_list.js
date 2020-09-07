'use strict';

const Node = require('../node.js');

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      let current = this.head;
      while(current.next) {
        current = current.next;
      }
      current.next = node;
    }
    return this;
  }

  insert(value) {
    let current = this.head;
    let node = new Node(value);
    node.next = current;
    this.head = node;
    current = this.head;
  }

  includes(searchVal) {
    let current = this.head;
    let result = searchVal;
    while (current !== null) {
      if (current.value === searchVal) {
        console.log(result, 'IS in your list');
        return true;
      }
      current = current.next;
    }
    console.log(result, 'IS NOT in your list');
    return false;
  }

  toString() {
    let stringToReturn = '';
    let current = this.head;
    while (current) {
      stringToReturn += '{ ' + current.value + ' } -> '
      current = current.next
    }
    return stringToReturn + 'NULL';
  }

  insertBefore(value, newVal) {
    let current = this.head;
    let previous;
    while (current.next) {
      if (current.value === value) {
        let node = new Node(newVal);
        node.next = previous.next;
        previous.next = node;
        console.log('previous: ', previous);
        return this;
      }
      previous = current;
      current = current.next;
    }
  }

  insertAfter(value, newVal) {
    let current = this.head;
    while(current.next) {
      if(current.value ===value) {
        let node = new Node(newVal);
        let nextNode = current.next;
        current.next = node;
        node.next = nextNode;
        return this;
      }
      current = current.next;
    }
  }

  kthFromEnd(k){
    let arr = [];
    let currentNode = this.head;
    while(currentNode){
      arr.push(currentNode.value);
      currentNode = currentNode.next;
    }

    console.log(arr)
    return (arr[arr.length -1 - k])
  }


}

module.exports = LinkedList;
