
/**
 * The number of minutes it takes to prepare the single layer.
 */
const PREPARATION_MINUTES_PER_LAYER = 2;
const EXPECTED_MINUTES_IN_OVEN = 40

/**
 * Determines the number of minutes the lasagna still needs to remain in the
 * oven to be properly prepared.
 *
 * @param { number } actualMinutesInOven
 * @returns { number } the number of minutes remaining
 */
function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven

}

/**
 * Given the number of layers, determine the total preparation time.
 *
 * @param { number } numberOfLayers
 * @returns { number } the total preparation time
 */
function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * PREPARATION_MINUTES_PER_LAYER
}

/**
 * Calculates the total working time. That is, the time to prepare all the layers
 * of lasagna, and the time already spent in the oven.
 *
 * @param { number } numberOfLayers
 * @param { number } actualMinutesInOven
 * @returns { number } the total working time
 */
function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven
}

console.log(totalTimeInMinutes(3, 20))