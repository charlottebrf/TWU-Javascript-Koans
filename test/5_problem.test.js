
const urduConverter = require('../src/5_problem');

test('returns a correctly sorted array', () => {
  expect(urduConverter([["zara", "dhyaan", "dein"],["mazarat", "chahenge"],["attention", "please"]
])).toEqual(["zara", "dhyaan", "dein", "chahenge", "mazarat", "attention", "please"]);
});
