const { WeightConverter } = require('../src/converter'); 

describe('WeightConverter', () => {
  describe('Converting ounces', () => {
    test.each([
      [4, ['0.25 pounds', '0.00 tons']],
      [32, ['2.00 pounds', '0.00 tons']],
     
    ])('Converting %i ounces', (input, expected) => {
      expect(WeightConverter('ounces', input)).toEqual(expected);
    });
  });

  describe('Converting pounds', () => {
    test.each([
      [1, ['16.00 ounces', '0.00 tons']],
      [2000, ['32000.00 ounces', '1.00 tons']],
     
    ])('Converting %i pounds', (input, expected) => {
      expect(WeightConverter('pounds', input)).toEqual(expected);
    });
  });

  describe('Converting tons', () => {
    test.each([
      [0.5, ['1000.00 pounds', '16000.00 ounces']],
      [1, ['2000.00 pounds', '32000.00 ounces']],
      
    ])('Converting %i tons', (input, expected) => {
      expect(WeightConverter('tons', input)).toEqual(expected);
    });
  });

  describe('Invalid measurement', () => {
    test('Passing an invalid measurement unit', () => {
      expect(WeightConverter('kilograms', 100)).toBe('wrong input');
    });
  });
});
