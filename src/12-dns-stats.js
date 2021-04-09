/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainList = domains;
  let element;
  const stats = {};

  for (let i = 0; i < domainList.length; i++) {
    element = domainList[i];
    element = element.split('.');
    domainList[i] = element;
  }

  for (let i = 0; i < domainList.length; i++) {
    for (let j = domainList[i].length - 1; j >= 0; j--) {
      if (j === domainList[i].length - 1) element = `.${domainList[i][j]}`;
      else element = element.concat('.', domainList[i][j]);
      if (!(element in stats)) {
        stats[`${element}`] = 1;
      } else stats[`${element}`] += 1;
    }
  }

  return stats;
}

module.exports = getDNSStats;
