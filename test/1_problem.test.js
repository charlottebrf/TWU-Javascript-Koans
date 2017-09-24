const kiteCompetition = require('../src/1_problem');

test('multiples of 3 return "Peche!"', () => {
  expect(kiteCompetition(3)).toEqual("Peche!\n");
});

test('multiples of 5 return "Ipo kaate!"', () => {
  expect(kiteCompetition(5)).toEqual("Peche!\nIpo kaate!\n");
});

test('multiples of 3 & 5 return "Peche! Ipo kaate!"', () => {
  expect(kiteCompetition(15)).toEqual("Peche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\n");
});

test('100 prints all possibilities', () => {
  expect(kiteCompetition(100)).toEqual(
    "Peche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nIpo kaate!\nPeche!\nPeche!\nIpo kaate!\n");
  });
