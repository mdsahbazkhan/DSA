//N-Queens

function solveNQueens(n) {
  let board = Array.from({ length: n }, () => Array(n).fill("."));
  let ans = [];
  function nQueen(board, row) {
    if (row == n) {
      ans.push(board.map((r) => r.join("")));
      return;
    }
    for (let j = 0; j < n; j++) {
      if (isSafe(board, row, j, n)) {
        board[row][j] = "Q";
        nQueen(board, row + 1);
        board[row][j] = ".";
      }
    }
  }
  nQueen(board, 0);
  return ans;
  //   return ans.length; // TotalNqueen
}
function isSafe(board, row, col, n) {
  //Horizontally
  for (let j = 0; j < n; j++) {
    if (board[row][j] == "Q") {
      return false;
    }
  }
  //Vertically
  for (let i = 0; i < row; i++) {
    if (board[i][col] == "Q") {
      return false;
    }
  }

  //left Diagonal
  for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == "Q") {
      return false;
    }
  }
  //   right Diagonal
  for (let i = row, j = col; i >= 0 && j < n; i--, j++) {
    if (board[i][j] == "Q") {
      return false;
    }
  }
  return true;
}
console.log(solveNQueens(1));
