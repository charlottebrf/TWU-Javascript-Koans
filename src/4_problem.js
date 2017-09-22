function currencyCalculator(arrayOfNotes) {
let notes = [10, 20, 50, 100, 500, 1000];
let found = [];
  for(i = 0; i <= arrayOfNotes.length; i++ ) {
    if (notes.includes(arrayOfNotes[i])) {
      found.push(arrayOfNotes[i]);
    } else {
      found.push(0);
    }
  }

  let sum = 0;
  for(i = 0; i <= found.length; i++) {
    if (found[i] == 0) { break; }
      sum = found.reduce((a, b) => a + b, 0);
    }
    return sum;
}


module.exports = currencyCalculator;
