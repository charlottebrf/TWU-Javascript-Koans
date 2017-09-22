const currencyCalculator = require('../src/4_problem');

test('returns a sum of valid Indian currency notes', () => {
  expect(currencyCalculator([10, 20, 100])).toEqual(130);
});

test('only collects valid numbers', () => {
  expect(currencyCalculator([20, 50, 10, 20, 13, 500])).toEqual(100);
});
