// 4 Sum

//Brute Force

// function fourSum(arr, target) {
//   let n = arr.length;
//   let st = new Set();
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         for (let l = k + 1; l < n; l++) {
//           if (arr[i] + arr[j] + arr[k] + arr[l] == target) {
//             let temp = [arr[i], arr[j], arr[k], arr[l]].sort((a, b) => a - b);
//             st.add(temp.toString());
//           }
//         }
//       }
//     }
//   }
//   let ans = [];
//   for (let fourSum of st) {
//     ans.push(fourSum.split(",").map(Number));
//   }
//   return ans;
// }
// const arr = [1, 0, -1, 0, -2, 2];
// console.log(fourSum(arr, 0));

//Better
// function fourSum(arr, target) {
//   let n = arr.length;
//   let st = new Set();
//   for (let i = 0; i < n; i++) {
//     let seen = new Set();
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         let fourth = target - (arr[i] + arr[j] + arr[k]);
//         if (seen.has(fourth)) {
//           let temp = [arr[i], arr[j], arr[k], fourth].sort((a, b) => a - b);
//           st.add(temp.toString());
//         }
//         seen.add(arr[k]);
//       }
//     }
//   }
//   let ans = [];
//   for (let fourSum of st) {
//     ans.push(fourSum.split(",").map(Number));
//   }
//   return ans;
// }
// const arr = [2, 2, 2, 2, 2];
// console.log(fourSum(arr, 8));

//Optimal
// function fourSum(arr, target) {
//   arr.sort((a, b) => a - b);
//   let n = arr.length;
//   let ans = [];
//   for (let i = 0; i < n; i++) {
//     if (i > 0 && arr[i] == arr[i - 1]) continue;
//     for (let j = i + 1; j < n; j++) {
//       if (j != i + 1 && arr[j] == arr[j - 1]) continue;
//       let k = j + 1;
//       let l = n - 1;
//       while (k < l) {
//         let sum = arr[i] + arr[j] + arr[k] + arr[l];
//         if (sum < target) {
//           k++;
//         } else if (sum > target) {
//           l--;
//         } else {
//           let temp = [arr[i], arr[j], arr[k], arr[l]];
//           ans.push(temp);
//           k++;
//           l--;
//           while (k < l && arr[k] == arr[k - 1]) k++;
//           while (k < l && arr[l] == arr[l + 1]) l--;
//         }
//       }
//     }
//   }
//   return ans;
// }
// const arr = [1, 0, -1, 0, -2, 2];
// console.log(fourSum(arr, 0));
