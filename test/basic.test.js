const calculator = require('../src/basic');


describe('Calculator', () => {
    describe('Addition', () => {
        var BVAdata = [
            [1, 2, 3],
            [4, 5, 9],
            [3, 12, 15],
            [4, 6, 10]
        ];

        test.each(BVAdata)(
            'BVA: addition(%i, %i) should return %i',
            (a, b, expected) => {
                expect(calculator.addition(a, b)).toBe(expected);
            }
        );
    });

    describe('Subtraction', () => {
        var BVAdata = [
            [5, 2, 3],
            [10, 7, 3],
            [15, 5, 10],
            [8, 4, 4]
        ];

        test.each(BVAdata)(
            'BVA: subtraction(%i, %i) should return %i',
            (a, b, expected) => {
                expect(calculator.subtraction(a, b)).toBe(expected);
            }
        );
    });

    describe('Multiplication', () => {
        var BVAdata = [
            [2, 3, 6],
            [4, 5, 20],
            [6, 7, 42],
            [8, 9, 72]
        ];

        test.each(BVAdata)(
            'BVA: multiplication(%i, %i) should return %i',
            (a, b, expected) => {
                expect(calculator.multiply(a, b)).toBe(expected);
            }
        );
    });

    describe('Division', () => {
        var BVAdata = [
            [6, 2, 3],
            [15, 3, 5],
            [20, 4, 5],
            [24, 6, 4]
        ];

        test.each(BVAdata)(
            'BVA: division(%i, %i) should return %i',
            (a, b, expected) => {
                expect(calculator.division(a, b)).toBe(expected);
            }
        );
    });
});
