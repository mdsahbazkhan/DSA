// Longest Subarray with 0 Sum

//Brute

// function LargestSub(arr) {
//   let n = arr.length;
//   let maxLength = 0;
//   for (let i = 0; i < n; i++) {
//     let sum = 0;
//     for (let j = i; j < n; j++) {
//       sum += arr[j];
//       if (sum == 0) {
//         maxLength = Math.max(maxLength, j - i + 1);
//       }
//     }
//   }
//   return maxLength;
// }
// const arr = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];
// console.log(LargestSub(arr));

//Optimal

function LargestSub(arr) {
  let n = arr.length;
  let maxLength = 0;
  let map = new Map();
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == 0) {
      maxLength = i + 1;
    } else if (map.has(sum)) {
      maxLength = Math.max(maxLength, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return maxLength;
}
const arr = [1, -1, 3, 2, -2, -8, 1, 7, 10, 23];
console.log(LargestSub(arr));
