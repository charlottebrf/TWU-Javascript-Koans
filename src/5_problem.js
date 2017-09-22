function urduConverter(arrayOfText) {
  sortedText = [];
  for(i = 0; i <= arrayOfText.length; i++ ) {
    sortedText = arrayOfText[1].sort();
    arrayOfText.slice(1, sortedText);
  }
  return [].concat.apply([], arrayOfText);
}

module.exports = urduConverter;
