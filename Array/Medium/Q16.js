// Merge Overlapping Subarr

// brute;

// function overlappSubInterval(arr) {
//   let n = arr.length;
//   arr.sort((a, b) => a[0] - b[0]);
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     let start = arr[i][0];
//     let end = arr[i][1];

//     for (let j = i + 1; j < n; j++) {
//       if (arr[j][0] <= end) {
//         end = Math.max(end, arr[j][1]);
//         i = j;
//       } else {
//         break;
//       }
//     }
//     ans.push([start, end]);
//   }
//   return ans;
// }
// const arr = [
//   [1, 3],
//   [2, 6],
//   [8, 9],
//   [9, 11],
//   [8, 10],
//   [2, 4],
//   [15, 18],
//   [16, 17],
// ];
// console.log(overlappSubInterval(arr));

//Optimal
// function overlappSubInterval(arr) {
//   let n = arr.length;
//   arr.sort((a, b) => a[0] - b[0]);
//   let start = arr[0][0];
//   let end = arr[0][1];
//   let ans = [];
//   for (let i = 1; i < n; i++) {
//     if (arr[i][0] <= end) {
//       end = Math.max(end, arr[i][1]);
//     } else {
//       ans.push([start, end]);
//       start = arr[i][0];
//       end = arr[i][1];
//     }
//   }
//   ans.push([start, end]);
//   return ans;
// }
// const arr = [
//   [1, 3],
//   [2, 6],
//   [8, 9],
//   [9, 11],
//   [8, 10],
//   [2, 4],
//   [15, 18],
//   [16, 17],
// ];
// console.log(overlappSubInterval(arr));
