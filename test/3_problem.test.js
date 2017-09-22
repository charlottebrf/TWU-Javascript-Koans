const fareCalculator = require('../src/3_problem');

test('returns the fare of a daytime journey', () => {
  expect(fareCalculator(6, 8, "D")).toEqual(92);
});

test('returns the fare of an evening journey', () => {
  expect(fareCalculator(3.5, 4, "N")).toEqual(84);
});
