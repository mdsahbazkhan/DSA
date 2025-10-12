// Median of Row Wise Sorted Matrix

function findLow(matrix, n, col) {
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    min = Math.min(min, matrix[i][col]);
  }
  return min;
}
function findHigh(matrix, n, col) {
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    max = Math.max(max, matrix[i][col]);
  }
  return max;
}
function upperBound(arr, target) {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let ans = n;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
function blackBox(matrix, x, n) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    count += upperBound(matrix[i], x);
  }
  return count;
}

function findMedian(matrix, n, m) {
  //   let low = Math.min(...matrix.flat());
  //   let high = Math.max(...matrix.flat());
  let required = Math.floor((n * m) / 2);
  let low = findLow(matrix, n, 0);
  let high = findHigh(matrix, n, m - 1);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let smallEquals = blackBox(matrix, mid, n);
    if (smallEquals <= required) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return low;
}
console.log(
  findMedian(
    [
      [1, 5, 7, 9, 11],
      [2, 3, 4, 8, 9],
      [9, 10, 12, 14, 16],
    ],
    3,
    5
  )
);
