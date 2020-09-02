'use strict';

const LinkedList = require('./linked_list');

class ZipList extends LinkedList{
  constructor(){
    super()
  }
  zipList(link1, link2){
    let list1 = link1.head;
    let list2 = link2.head;
    while(list1 && list2){
      this.append(list1.value);
      this.append(list2.value);
      list1 = list1.next;
      list2 = list2.next;
    }
  }
}


module.exports = ZipList;
