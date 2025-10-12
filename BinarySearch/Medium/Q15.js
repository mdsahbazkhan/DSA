// Find a Peak Element II 2D Matrix
var findPeakGrid = function (matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let low = 0;
  let high = m - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = findMax(matrix, n, m, mid);
    let left = mid - 1 >= 0 ? matrix[row][mid - 1] : -1;
    let right = mid + 1 < m ? matrix[row][mid + 1] : -1;
    if (matrix[row][mid] > left && matrix[row][mid] > right) {
      return [row, mid];
    } else if (matrix[row][mid] < left) high = mid - 1;
    else low = mid + 1;
  }
  return [-1, -1];
};
function findMax(matrix, n, m, col) {
  let max = 0;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (matrix[i][col] > max) {
      max = matrix[i][col];
      index = i;
    }
  }
  return index;
}
console.log(
  findPeakGrid([
    [10, 20, 15],
    [21, 30, 14],
    [7, 16, 32],
  ])
);
