function isSafe(board, row, col, digit) {
  //Horizontal
  for (let j = 0; j < 9; j++) {
    if (board[row][j] === digit) {
      return false;
    }
  }
  //Vertical
  for (let i = 0; i < 9; i++) {
    if (board[i][col] === digit) {
      return false;
    }
  }
  //Grid
  let sRow = Math.floor(row / 3) * 3;
  let sCol = Math.floor(col / 3) * 3;
  for (let i = sRow; i < sRow + 3; i++) {
    for (let j = sCol; j < sCol + 3; j++) {
      if (board[i][j] === digit) {
        return false;
      }
    }
  }
  return true;
}
function helper(board, row, col) {
  if (row === 9) {
    return true;
  }
  let newRow = row,
    newCol = col + 1;
  if (newCol === 9) {
    newCol = 0;
    newRow = row + 1;
  }
  if (board[row][col] !== ".") {
    return helper(board, newRow, newCol);
  }
  for (let d = 1; d <= 9; d++) {
    let digit = d.toString();
    if (isSafe(board, row, col, digit)) {
      board[row][col] = digit;
      if (helper(board, newRow, newCol)) {
        return true;
      }
      board[row][col] = ".";
    }
  }
  return false;
}
var solveSudoku = function (board) {
  helper(board, 0, 0);
};
console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
