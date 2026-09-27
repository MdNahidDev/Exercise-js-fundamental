/**
 * The day rate, given a rate per hour
 *
 * @param {number} ratePerHour
 * @returns {number} the rate per day
 */

export function dayRate(ratePerHour) {
  return 8 * ratePerHour;
}

/**
 * Calculates the number of days in a budget, rounded down
 *
 * @param {number} budget: the total budget
 * @param {number} ratePerHour: the rate per hour
 * @returns {number} the number of days
 */
export function daysInBudget(budget, ratePerHour) {
  let dayRate = 8 * ratePerHour;
  let days = budget / dayRate;
  return Math.floor(days);
}

/**
 * Calculates the discounted rate for large projects, rounded up
 *
 * @param {number} ratePerHour
 * @param {number} numDays: number of days the project spans
 * @param {number} discount: for example 20% written as 0.2
 * @returns {number} the rounded up discounted rate
 */
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  let months = Math.floor(numDays / 22);
  let remainingDays = numDays % 22;
  let dayRate = 8 * ratePerHour;

  let discountedMonthlyRate = dayRate * 22 * (1 - discount);
  let remainingDaysCost = remainingDays * dayRate;

  let result = months * discountedMonthlyRate + remainingDaysCost;
  return Math.ceil(result);
}
