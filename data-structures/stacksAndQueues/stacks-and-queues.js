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
      return {};
    } else if (this,front){
      console.log(this.front .value);
      return this.front.value;
    }
  }



}