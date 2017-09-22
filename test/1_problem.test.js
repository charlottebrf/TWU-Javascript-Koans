const kiteCompetition = require('../src/1_problem');

test('multiples of 3 return "Peche!"', () => {
  expect(trafficJamAnalysis(3)).toEqual("Peche!");
});

test('multiples of 5 return "Ipo kaate!"', () => {
  expect(trafficJamAnalysis(5)).toEqual("Ipo kaate!");
});

test('multiples of 3 & 5 return "Peche! Ipo kaate!"', () => {
  expect(trafficJamAnalysis(15)).toEqual("Peche! Ipo kaate!");
});

test('100 prints all possibilities', () => {
  expect(trafficJamAnalysis(100)).toEqual("xxxxx/Peche! Ipo kaate!");
});
