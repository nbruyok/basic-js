const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    //строка
    for (let j = 0; j < matrix[0].length; j++) {
      // колонна этой строки
      if (matrix[i][j] === "^^") {
        sum++;
      }
    }
  }
  return sum;
}

module.exports = {
  countCats,
};
