const selectionSort = require('../src/selectionSort'); // Adjust the path to your selectionSort module

describe('Selection Sort', () => {
    test('sorts an array of numbers', () => {
        expect(selectionSort([29, 10, 14, 37, 13])).toEqual([10, 13, 14, 29, 37]);
    });

    test('works with an empty array', () => {
        expect(selectionSort([])).toEqual([]);
    });

    test('works with an array of one element', () => {
        expect(selectionSort([1])).toEqual([1]);
    });

    test('works with negative numbers', () => {
        expect(selectionSort([-3, -1, -2])).toEqual([-3, -2, -1]);
    });

    test('works with already sorted array', () => {
        expect(selectionSort([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    });

    test('works with reverse sorted array', () => {
        expect(selectionSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    });
});
