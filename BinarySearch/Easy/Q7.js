// Find the row with maximum number of 1's

//Brute force;

// function rowAndMaximumOnes(matrix) {
//   let n = matrix.length;
//   let m = matrix[0].length;
//   let index = 0;
//   let count_max = 0;
//   for (let i = 0; i < n; i++) {
//     let count = 0;
//     for (let j = 0; j < m; j++) {
//       count += matrix[i][j];
//     }
//     if (count > count_max) {
//       count_max = count;
//       index = i;
//     }
//   }
//   return [index, count_max];
// }
// console.log(
//   rowAndMaximumOnes([
//     [0, 0, 1, 1, 1],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1],
//     [0, 0, 0, 0, 0],
//     [0, 1, 1, 1, 1],
//   ])
// );

// Optimal

function lowerBound(arr, n, k) {
  let ans = n;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

function rowAndMaximumOnes(matrix) {
  let n = matrix.length;
  let m = matrix[0].length;
  let index = -1;
  let count_max = 0;
  for (let i = 0; i < n; i++) {
    let count_once = m - lowerBound(matrix[i], m, 1);
    if (count_once > count_max) {
      count_max = count_once;
      index = i;
    }
  }
  return [index, count_max];
}
console.log(
  rowAndMaximumOnes([
    [0, 1],
    [1, 0],
  ])
);
