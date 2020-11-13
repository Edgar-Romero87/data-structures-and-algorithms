'use strict';
const {quickSort, partition, swap} = require('../quickSort.js')

it('should return a sorted array', ()=>{
  const arr = [8,4,23,42,16,15];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ 4, 8, 15, 16, 23, 42 ]);
});

it('should return a sorted array with negative numbers', ()=>{
  const arr = [ -2, 5, 8, 12, 18, 20 ]
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
});

it('should return a sorted array with few uniques', ()=>{
  const arr = [ 5, 5, 5, 7, 7, 12 ];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ 5, 5, 5, 7, 7, 12 ]);
});

it('should return a sorted array with negative numbers', ()=>{
  const arr = [20,18,12,8,5,-2];
  expect(quickSort(arr, 0, arr.length-1)).toEqual([ -2, 5, 8, 12, 18, 20 ]);
});
