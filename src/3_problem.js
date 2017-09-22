function fareCalculator(distance,waitingTime,dayOrNight) {
  let fare = 20 + 8 * (distance-1) + 4 * waitingTime;
  if (dayOrNight == "N") {
    fare += fare / 2 
  }
  return fare;
}

module.exports = fareCalculator;
