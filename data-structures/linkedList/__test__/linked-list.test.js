'use strict';

const LinkedList = require('../linked_list');
const ZipList = require('../zipped-list');

//LINKED LIST
describe('Can instantiate a Linked List', () =>{
  it('should instantiate', () =>{
    const ll = new LinkedList();
    expect(ll).toBeDefined();
  })
})
///// Insert
describe('can insert nodes into a linked list',() =>{

  it('should add to an empty list', () =>{
    const ll = new LinkedList();
    ll.insert('banana');
    //look at the linkedList to see if it has what we added
    expect(ll.head.value).toBe('banana');
  })

  it('should add to a NOT empty list', () =>{
    const ll = new LinkedList();
    ll.insert('banana');
    ll.insert('apple');
    expect(ll.head.value).toBe('apple');
    expect(ll.head.next.value).toBe('banana');
  })

  it('should properly insert multiple nodes into a the list', () =>{
    const ll = new LinkedList();
    ll.insert('grape');
    ll.insert('pear');
    ll.insert('apple');
    ll.insert('banana');
    expect(ll.head.value).toBe('banana');
    expect(ll.head.next.value).toBe('apple');
    expect(ll.head.next.next.value).toBe('pear');
    expect(ll.head.next.next.next.value).toBe('grape');
  })
})

///// Append
describe('can append nodes to the end of linkedList', () =>{

  it('should append to an empty list', () =>{
    const ll = new LinkedList();
    ll.append('banana');
    expect(ll.head.value).toBe('banana');
  })

})





//ZIPLIST
describe('Ziplist', () =>{

  it('should zip 2 linked list alternating into 1',() =>{
    let ll1 = new LinkedList();
    let ll2 = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(5);
    ll2.append(2);
    ll2.append(4);
    ll2.append(6);
    let zipList = new ZipList();
    zipList.zipList(ll1, ll2)
    let value = zipList.toString();
    expect(value).toBe('{ 1 } -> { 2 } -> { 3 } -> { 4 } -> { 5 } -> { 6 } -> NULL')
  })
})



