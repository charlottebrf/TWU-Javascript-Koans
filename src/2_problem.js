function trafficJamAnalysis(rickshaws, time ) {
  if (rickshaws > 40 && time < 20.00) {
    return "Jam";
  } else {
    return "No Jam";
  }
}

module.exports = trafficJamAnalysis;
