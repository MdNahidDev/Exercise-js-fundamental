export function frontDoorResponse(line) {
  return line[0];
}

/**
 * Format the password for the front-door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the front door password
 */
export function frontDoorPassword(word) {
  let lowerWord = word.toLowerCase();
  let firstWord = lowerWord.slice(0,1);
  let bigWord = firstWord.toUpperCase();
  let leftOverWord = lowerWord.slice(1, word.length);
  let fullWord = bigWord.concat(leftOverWord);
  return fullWord;
}

/**
 * Respond with the correct character, given the line of the
 * poem, if this were said at the back door.
 *
 * @param {string} line
 * @returns {string}
 */
export function backDoorResponse(line) {
  let fullLine = line.trim();
  return fullLine[fullLine.length - 1];
}

/**
 * Format the password for the back door, given the response
 * letters.
 *
 * @param {string} word the letters you responded with before
 * @returns {string} the back door password
 */
export function backDoorPassword(word) {
  let firstWord = word.slice(0,1);
  let bigWord = firstWord.toUpperCase();
  let leftOverWord = word.slice(1, word.length);
  let fullWord = bigWord.concat(leftOverWord);
  return fullWord.concat(", please")
}
