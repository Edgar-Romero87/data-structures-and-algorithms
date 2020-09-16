'use strict';


const Stack = require('./stacks-and-queues').Stack;
const Queue = require('./stacks-and-queues').Queue;


let stackClass = new Stack();
let queueClass = new Queue();


describe('stacks', () => {
  it('push should add a node to the stack', () =>{
    let results = stackClass.push('a');
    expect(results.value).toBe('a')
  })
})

describe('stacks', () => {
  it('pop should remove a node at the top of stack', () =>{
    stackClass.push('a');
    stackClass.push('b');
    stackClass.push('c');
    let results = stackClass.pop();
    expect(results.value).toBe('c')
  })
})

// describe('Queues', () => {
//   it('should add a node to the queue', () =>{
//     expect().toBe()
//   })
// })
