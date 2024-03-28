const insertionSort = require('../src/insertionSort'); // Adjust the path to your insertionSort module

describe('Insertion Sort', () => {
    test('sorts an array of numbers', () => {
        expect(insertionSort([5, 2, 4, 6, 1, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test('works with an empty array', () => {
        expect(insertionSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(insertionSort([1])).toEqual([1]);
    });

    test('works with negative numbers', () => {
        expect(insertionSort([-3, -1, -2])).toEqual([-3, -2, -1]);
    });

    test('works with already sorted array', () => {
        expect(insertionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('works with reverse sorted array', () => {
        expect(insertionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });
});
