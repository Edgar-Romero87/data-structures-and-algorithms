'use strict';

const LinkedList = require('./linked_list');
const ZipList = require('./zipped-list');


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



