// Find the repeating and missing number

//Brute Force

// function findMissRepeatVal(arr, n) {
//   let repeating = -1;
//   let missing = -1;
//   for (let i = 1; i <= n; i++) {
//     let count = 0;
//     for (let j = 0; j < n; j++) {
//       if (arr[j] == i) count++;
//     }
//     if (count == 2) repeating = i;
//     else if (count == 0) missing = i;

//     if (repeating != -1 && missing != -1) break;
//   }
//   return { repeating, missing };
// }
// console.log(findMissRepeatVal([4, 3, 6, 2, 1, 1, 5], 7));

//Better
// function findMissRepeatVal(arr) {
//   let n = arr.length;
//   let missing = -1;
//   let repeating = -1;
//   let hash = new Array(n + 1).fill(0);
//   for (let i = 0; i < n; i++) {
//     hash[arr[i]]++;
//   }
//   for (let i = 1; i < hash.length; i++) {
//     if (hash[i] == 2) repeating = i;
//     else if (hash[i] == 0) missing = i;
//   }
//   return { repeating, missing };
// }
// console.log(findMissRepeatVal([4, 3, 6, 2, 1, 2]));

//Optimal

// function findMissRepeatVal(arr) {
//   let n = arr.length;

//   // Expected sums
//   let SN = (n * (n + 1)) / 2;
//   let S2N = (n * (n + 1) * (2 * n + 1)) / 6;

//   // Actual sums
//   let S = 0;
//   let S2 = 0;
//   for (let i = 0; i < n; i++) {
//     S += arr[i];
//     S2 += arr[i] * arr[i];
//   }

//   // Equations:
//   // val1 = X - Y
//   // val2 = X^2 - Y^2 = (X - Y)(X + Y)
//   let val1 = S - SN; // X - Y
//   let val2 = S2 - S2N; // X^2 - Y^2

//   val2 = val2 / val1; // X + Y

//   let x = (val1 + val2) / 2; // Repeating number
//   let y = x - val1; // Missing number

//   return { repeating: x, missing: y };
// }

// console.log(findMissRepeatVal([4, 3, 6, 2, 1, 1]));

//DSA Question Solution

//Brute
// function findMissingAndRepeat(grid) {
//   let n = grid.length;
//   let size = n * n;
//   let hash = new Array(size + 1).fill(0);

//   for (let row of grid) {
//     for (let val of row) {
//       hash[val]++;
//     }
//   }

//   let repeated = -1,
//     missing = -1;
//   for (let i = 1; i <= size; i++) {
//     if (hash[i] === 2) repeated = i;
//     if (hash[i] === 0) missing = i;
//   }

//   return [repeated, missing];
// }
// console.log(
//   findMissingAndRepeat([
//     [9, 1, 7],
//     [8, 9, 2],
//     [3, 4, 6],
//   ])
// );

//Optimal

function findMissingAndRepeat(grid) {
  let n = grid.length;
  let N = n * n;

  let SN = (N * (N + 1)) / 2;
  let S2N = (N * (N + 1) * (2 * N + 1)) / 6;
  let S = 0;
  let S2 = 0;
  for (let row of grid) {
    for (let val of row) {
      S += val;
      S2 += val * val;
    }
  }
  let val1 = S - SN;
  let val2 = S2 - S2N;
  val2 = val2 / val1;
  let X = (val1 + val2) / 2;
  let Y = X - val1;
  return [X, Y];
}
console.log(
  findMissingAndRepeat([
    [9, 1, 7],
    [8, 9, 2],
    [3, 4, 6],
  ])
);
