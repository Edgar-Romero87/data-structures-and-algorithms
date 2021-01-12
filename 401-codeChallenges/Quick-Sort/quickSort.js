'use strict';


function quickSort(arr, left, right){
  if( left >= right ){
    return;
  }

  let position = partition(arr, left, right)
  quickSort(arr, left, position -1)
  quickSort(arr, position +1, right)
  return arr;
}

function partition(arr, left, right){
  let pivotIndex = left;
  let pivotValue = arr[right];

  for(let i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, pivotIndex);
      pivotIndex ++;
    }
  }
  swap(arr, pivotIndex, right);
  return pivotIndex;
}

function swap(arr, a, b){
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

module.exports = {quickSort, partition, swap};
