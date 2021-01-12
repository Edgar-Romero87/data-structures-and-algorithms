'use strict';

/*
Implement a Hashtable with the following methods:

add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
get: takes in the key and returns the value from the table.
contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
hash: takes in an arbitrary key and returns an index in the collection.
*/

class Hashtable {

  constructor(size=1024){
    this.buckets = new Array(size);
  }

  add(key, value) {

    const index = this.hash(key);

    const contentOfBucket = this.buckets[index];

    if(contentOfBucket === undefined){
      this.buckets[index] = [ [key, value] ];
    }
    else {
      this.buckets[index].push([key, value]);
    }
  }

  get(key){
    const index = this.hash(key);

    const itemsInBucket = this.buckets[index];

    if(itemsInBucket){
      for(let item of itemsInBucket){
        if(item[0] === key){
          return item[1];
        }
      }
    }
    return null;
  }

  contains(key){
    const index = this.hash(key);

    if(this.buckets[index] === undefined){
      return false;
    }
    return true;
  }

  hash(key){
    //return 0; integer(index)
    let num = 0;

    for(let char of key){
      num += char.charCodeAt(0);
    }

    const primed = num * 599;
    const index = primed % this.buckets.length;

    return index;
  }

}

module.exports = Hashtable;
