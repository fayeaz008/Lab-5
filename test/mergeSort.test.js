const { mergeSort } = require('../src/mergeSort'); 

describe('mergeSort Function', () => {
  test('should sort an array of numbers in ascending order', () => {
    expect(mergeSort([3, 5, 8, 5, 99, 1])).toEqual([1, 3, 5, 5, 8, 99]);
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([100, 83, 32, 9, 45, 61])).toEqual([9, 32, 45, 61, 83, 100]);
  });

  test('should handle an array with one item', () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test('should handle an empty array', () => {
    expect(mergeSort([])).toEqual([]);
  });

  test('should handle arrays with negative numbers', () => {
    expect(mergeSort([-3, -1, -2])).toEqual([-3, -2, -1]);
    expect(mergeSort([-10, 5, 0, -3])).toEqual([-10, -3, 0, 5]);
  });
});
