/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let string2 = s2;
  let count = 0;
  let findIndex;

  for (let i = 0; i < s1.length; i++) {
    findIndex = string2.indexOf(s1[i]);
    if (findIndex !== -1) {
      count++;
      if (findIndex === 0) {
        string2 = string2.slice(findIndex + 1);
      } else if (findIndex === string2.length) {
        string2 = string2.slice(0, string2.length - 1);
      } else {
        string2 = string2.slice(0, findIndex)
          + string2.slice(findIndex + 1, string2.length);
      }
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
