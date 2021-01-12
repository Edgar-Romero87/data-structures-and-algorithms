'use strict';

function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  else {
    const mid = Math.floor(array.length/2);
    const left = array.slice(0,mid);
    const right = array.slice(mid,array.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}

function merge(left, right) {
  let resultArray = [];

  while(left.length && right.length) {
    if( left[0] <= right[0]) {
      resultArray.push(left[0]);
      left = left.slice(1);
    }
    else {
      resultArray.push(right[0]);
      right = right.slice(1);
    }
  }
  while(left.length) {
    resultArray.push(left.shift());
  }
  while(right.length) {
    resultArray.push(right.shift());
  }

  return resultArray;
}


module.exports = mergeSort;
