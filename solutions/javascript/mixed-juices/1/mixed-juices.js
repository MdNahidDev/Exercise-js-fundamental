export function timeToMixJuice(name) {
  switch (name){
    case "Pure Strawberry Joy":
      return 0.5;
      
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
      
    case "Tropical Island":
      return 3;
      
    case "All or Nothing":
      return 5;

    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let limesCut = 0;

  while (wedges < wedgesNeeded && limesCut < limes.length) {
    const lime = limes[limesCut];
    limesCut++;

    switch (lime) {
      case 'small':
        wedges += 6;
        break;
      case 'medium':
        wedges += 8;
        break;
      case 'large':
        wedges += 10;
        break;
    }
  }

  return limesCut;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeRemaining = timeLeft;
  let index = 0;
  while (timeRemaining > 0 && index < orders.length ) {
    timeRemaining -= timeToMixJuice(orders[index]);
    index++;
  }
  return orders.slice(index);
}
