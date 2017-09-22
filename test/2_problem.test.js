const trafficJamAnalysis = require('../src/2_problem');

test('no jam is predicted', () => {
  expect(trafficJamAnalysis(30, 15.00)).toEqual("No Jam");
});

test('jam is predicated', () => {
  expect(trafficJamAnalysis(42, 15.00)).toEqual("Jam");
});

test('jam is predicated', () => {
  expect(trafficJamAnalysis(60, 22.00)).toEqual("No Jam");
});
