function trafficJamAnalysis(rickshaws, time ) {
  if (rickshaws > 40 && time < 20.00) {
    return "Jam";
  } else {
    return "No Jam";
  }
}

module.exports = trafficJamAnalysis;


// The Indian government traffic jam analysis department has done some research and has found that traffic jams will occur when the number of auto rickshaws on the road is more than 40. Unless it is after 8pm in which case there are no traffic jams because the daytime traffic has finished.
