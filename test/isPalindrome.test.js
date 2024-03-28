const { isPalindrome } = require('../src/isPalindrome'); 

describe('isPalindrome Function', () => {
  test.each([
    [121, true],
    [123, false],
    [111, true],
    [12321, true],
    [123321, true],
    [123456, false],
    [0, true],
    [-121, false], // Assuming negative numbers are not considered palindromes
  ])('isPalindrome(%i) should return %s', (input, expected) => {
    expect(isPalindrome(input)).toBe(expected);
  });
});
