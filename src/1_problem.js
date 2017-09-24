function kiteCompetition(number) {
  result = "";
  for(i = 1; i <= number; i++) {
    result += phraseDecider(i);
  }
  return result;

  function phraseDecider(i) {
    kitePhrase = "";
    if (i % 3 == 0 && i % 5 == 0) {
      kitePhrase = "Ipo kaate!\n";
    } else if (i % 5 == 0) {
      kitePhrase = "Ipo kaate!\n";
    } else if (i % 3 == 0) {
      kitePhrase = "Peche!\n";
    }
    return kitePhrase;
  }
}

module.exports = kiteCompetition;
