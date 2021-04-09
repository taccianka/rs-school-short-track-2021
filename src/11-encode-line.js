/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const encoding = [];
  let count = 0;
  let k = 0;
  let j = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
      j = i + 1;
      while (str[i] === str[j]) {
        count++;
        j++;
      }
      i = j - 1;
      encoding[k] = count;
      count = 0;
      encoding[k + 1] = str[i];
      k += 2;
    } else {
      encoding[k] = str[i];
      k++;
    }
  }

  return encoding.join('');
}

module.exports = encodeLine;
