'use strict';

const LL = require('./linkedList/linked_list');
let list = new LL();
// let listResults =

list.insert('first');
list.insert('second');
list.insert('third');
list.insert('fourth');
list.insert('fifth');
list.append('last');

list.insertAfter('fourth', '4,5');

list.toString();
console.log('list at beginning: ', list);
// list.includes('first');
// list.includes('fourth');
// console.log('This was found:', list);

list.insertBefore('second', 'insertThis');

console.log('After insert:', list);
