const { NotImplementedError } = require('../extensions/index.js');

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
  let result = {};

  for (let element of domains) {
    const arr = element.split('.').reverse();
    let domain = '';

    arr.forEach((element) => {
      domain += '.' + element;

      result.hasOwnProperty(domain) ? result[domain]++ : (result[domain] = 1);
    });
  }

  return result;
}

module.exports = {
  getDNSStats,
};
