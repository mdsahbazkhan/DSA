//Word Search

var exist = function (board, word) {
  let n = board.length;
  let m = board[0].length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (board[i][j] == word[0]) {
        if (search(i, j, n, m, board, word, 0)) return true;
      }
    }
  }
  return false;
};

function search(i, j, n, m, board, word, idx) {
  if (idx == word.length) return true;
  if (i < 0 || j < 0 || i == n || j == m || board[i][j] != word[idx])
    return false;
  let temp = board[i][j];
  board[i][j] = "#";
  let op1 = search(i + 1, j, n, m, board, word, idx + 1);
  let op2 = search(i, j + 1, n, m, board, word, idx + 1);
  let op3 = search(i - 1, j, n, m, board, word, idx + 1);
  let op4 = search(i, j - 1, n, m, board, word, idx + 1);
  board[i][j] = temp;
  return op1 || op2 || op3 || op4;
}
