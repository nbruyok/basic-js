const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const board = [];
  const column = matrix[0].length;

  for (let i = 0; i < matrix.length; i++) {
    //строка
    board.push([]);
    for (let j = 0; j < column; j++) {
      // колонна этой строки
      board[i][j] = 0;
      //above
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j]) {
          board[i][j]++;
        }
      }
      //below
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j]) {
          board[i][j]++;
        }
      }
      //left
      if (matrix[i][j - 1] != undefined) {
        if (matrix[i][j - 1]) {
          board[i][j]++;
        }
      }
      //right
      if (matrix[i][j + 1] != undefined) {
        if (matrix[i][j + 1]) {
          board[i][j]++;
        }
      }
      //top left
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j - 1]) {
          board[i][j]++;
        }
      }
      //top right
      if (matrix[i - 1] != undefined) {
        if (matrix[i - 1][j + 1]) {
          board[i][j]++;
        }
      }
      //bottom left
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j - 1]) {
          board[i][j]++;
        }
      }
      //bottom right
      if (matrix[i + 1] != undefined) {
        if (matrix[i + 1][j + 1]) {
          board[i][j]++;
        }
      }
    }
  }

  return board;
}

module.exports = {
  minesweeper,
};
