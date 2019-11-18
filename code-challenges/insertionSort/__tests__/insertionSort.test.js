'use strict';

const insertionSort = require('../insertionSort');


//============== STACK ================
describe('Testing Insertion Sort', () => {
  test('Can Reverse an array using this sorting method', () => {
    const arr = [8, 4, 23, 42, 16, 15];
    expect(insertionSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });

  test('Can reverse an array containing duplicate values', () =>{
    const arr = [5, 12, 7, 5, 7];
    expect(insertionSort(arr)).toEqual([5, 5, 7, 7, 12]);
  })
});


