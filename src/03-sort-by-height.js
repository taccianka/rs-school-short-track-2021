/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = arr;
  let temp;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== -1) {
      for (let j = 0; j < arr1.length; j++) {
        if (arr1[j] !== -1 && arr1[i] < arr1[j]) {
          temp = arr1[i];
          arr1[i] = arr1[j];
          arr1[j] = temp;
        }
      }
    }
  }
  return arr1;
}

module.exports = sortByHeight;
