function currencyCalculator(arrayOfNotes) {
  let notes = [10, 20, 50, 100, 500, 1000];
  let foundNotes = [];
    for(i = 0; i <= arrayOfNotes.length; i++ ) {
      if (notes.includes(arrayOfNotes[i])) {
        foundNotes.push(arrayOfNotes[i]);
      } else {
        break;
      }
    }

  let sum = 0;
  for(i = 0; i <= foundNotes.length; i++) {
      sum = foundNotes.reduce((a, b) => a + b, 0);
    }
    return sum;
}
module.exports = currencyCalculator;
