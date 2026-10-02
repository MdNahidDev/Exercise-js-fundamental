export function totalBirdCount(birdsPerDay) {
  let bird = 0;
  for (let i = 0; i < birdsPerDay.length; i++) {
    bird = bird + birdsPerDay[i]
  }
  return bird;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let bird = 0;
  let startIndex = (week - 1) * 7;
  let lastIndex = week * 7;
  for (let i = startIndex; i < lastIndex; i++) {
    bird += birdsPerDay[i];
  }
  return bird;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
}
