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

  pop(){
    if(this.isEmpty()){
      throw "stack is empty";
    }
    let take = this.top.value;
    this.top = this.top.next;
    return take;
  }

  peek(){
    if(this.isEmpty()){
      throw "stack is empty";
    }
    return this.top.value
  }

  isEmpty() {
    if (this.top){
      console.log('true');
      return true;
    } else if(!this.top){
      console.log('false');
      return true;
    }
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
      return {};
    } else if (this,front){
      console.log(this.front .value);
      return this.front.value;
    }
  }



}