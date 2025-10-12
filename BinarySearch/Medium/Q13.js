// Search in a 2 D matrix

// Better

// function binarySearch(arr, target) {
//   let n = arr.length;
//   let low = 0;
//   let high = n - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] == target) return true;
//     else if (arr[mid] < target) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return false;
// }

// function searchMatrix(matrix, target) {
//   let n = matrix.length;
//   let m = matrix[0].length;
//   for (let i = 0; i < n; i++) {
//     if (matrix[i][0] <= target && target <= matrix[i][m - 1]) {
//       return binarySearch(matrix[i], target);
//     }
//   }
//   return false;
// }
// console.log(
//   searchMatrix(
//     [
//       [3, 4, 6, 8],
//       [10, 12, 13, 15],
//       [17, 18, 19, 20],
//       [21, 22, 23, 24],
//     ],
//     100
//   )
// );

// Optimal

function searchMatrix(matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let low = 0;
  let high = m * n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;
    if (matrix[row][col] == target) return true;
    else if (matrix[row][col] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}
console.log(
  searchMatrix(
    [
      [3, 4, 6, 8],
      [10, 12, 13, 15],
      [17, 18, 19, 20],
      [21, 22, 23, 24],
    ],
    10
  )
);
