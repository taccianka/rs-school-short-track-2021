/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const stringNum = String(n).split('');
  let max = 0;
  let tempNum;

  for (let i = 0; i < stringNum.length; i++) {
    tempNum = stringNum.slice();
    tempNum.splice(i, 1);
    if (+tempNum.join('') > max) max = +tempNum.join('');
  }
  return max;
}

module.exports = deleteDigit;
