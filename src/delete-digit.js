const { NotImplementedError } = require('../extensions/index.js');

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
  const numArr = n.toString().split('');
  const result = [];

  for (let i = 0; i < numArr.length; i++) {}

  result = Math.max(result);
}

module.exports = {
  deleteDigit,
};
