'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {

  constructor(){

    this.top = null;
  }


  //pushes new node to the top of the stack
  push(value){
    let node = new Node(value);
    node.next = this.top;
    this.top = node
    return this.top;

  }
  // pops last stack off the top
  pop(){
    if(this.top === null) throw new Error ('STACK IS EMPTY');

    let take = this.top;
    this.top = this.top.next;
    return take.value;
  }
  // shows the first thing in a stack
  peek(){
    if(this.top === null) throw new Error ('STACK IS EMPTY');

    return this.top
  }
  // Returns true or false if stack stack is empty

  isEmpty(){
    if(this.top){
      return true
    } else{
      return false;
    }
  }

}

class Queue{
  constructor(){
    this.front = null;
    this.back = null;
    this.queue = [];
  }
  enqueue(value){
    let node = new Node(value);

    this.queue.push(node)
    if (this.front === null){
      this.front = node;
      this.rear = node;
    } else {

    if (this.front === null){
      this.front = this.rear
      this.rear = node;
    } else {
      this.rear.next = node;

      this.rear = node;
    }
  }
  dequeue(){
    if(this.front ===null) {
      throw new Error('Nothing to dequeue');
    }
    return this.queue.shift();

  };

  pop(){
    let take = this.top;
    this.top = this.top.next;
    take.next = null;
    return take.value;
  };

  peek(){
    if(!this.top){
      return {};
    }else if
  };


  isEmpty(){
    if (this.top){
      console.log('false');
      return false;
    } else if(!this.top){
      console.log('true');
      return true;

    } return {};
  }
}


class Queue{
  constructor(){
    this.front = null;
    this.back - null;
  }
  enqueue(value){
    let node = new Node(value);
    this.back.next = node;
    this.back = node;
    return this.back;
  }

  dequeue(){ 
    if (!this.isEmpty()){
      let temp = this.front;
      this.front = this.front.next;
      temp.next = null;
      return temp.value;
    
    } else {
      return {};
    }


  }

  peek(){
    if (!this.front){

      return 'nothing to peek';
    } else if(this.front){

      return {};
    } else if (this,front){

      console.log(this.front .value);
      return this.front.value;
    }
  }

  isEmpty(){
    if(this.front){
      return true
    } else{
      return false;
    }
  }
}



module.exports = { Stack, Queue };


