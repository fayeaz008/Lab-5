const calculator = require('../src/advanced'); // Adjust the path to where your module is located

// Test for Modulo
describe('Modulo', () => {
    var testData = [
        [10, 3, 1],
        [9, 2, 1],
        [15, 4, 3],
        [20, 5, 0]
    ];
    describe.each(testData)('modulo(%i, %i), Expected %i', (a, b, expected) => {
        test(`Modulo ${a} % ${b}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });

    var edgeCases = [
        [0, 89, 0],
        
        [35, -8, 3],
        [-78, 33, -12]
    ];
    describe.each(edgeCases)('Edge Cases: modulo(%i, %i), Expected %i', (a, b, expected) => {
        test(`Modulo ${a} % ${b}`, () => {
            expect(calculator.modulo(a, b)).toBe(expected);
        });
    });
});

// Test for Power
describe('Power', () => {
    var testData = [
        [2, 3, 8],
        [4, 2, 16],
        [5, 3, 125],
        [3, 2, 9]
    ];
    describe.each(testData)('pow(%i, %i), Expected %i', (a, b, expected) => {
        test(`Pow ${a} ** ${b}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });

    var edgeCases = [
        [10, 0, 1],
        [-2, 3, -8],
        [2, -2, 0.25],
        [-3, 2, 9]
    ];
    describe.each(edgeCases)('Edge Cases: pow(%i, %i), Expected %i', (a, b, expected) => {
        test(`Pow ${a} ** ${b}`, () => {
            expect(calculator.pow(a, b)).toBe(expected);
        });
    });
});
