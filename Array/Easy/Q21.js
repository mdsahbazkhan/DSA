//Merge Sorted array without extra space

// Brute Force using extra space

// function mergeSort(arr1, m, arr2, n) {
//   let left = 0;
//   let right = 0;
//   let ans = new Array(m + n);
//   let index = 0;
//   while (left < m && right < n) {
//     if (arr1[left] <= arr2[right]) {
//       ans[index] = arr1[left];
//       left++;
//       index++;
//     } else {
//       ans[index] = arr2[right];
//       right++;
//       index++;
//     }
//   }
//   while (left < m) {
//     ans[index++] = arr1[left++];
//   }
//   while (right < n) {
//     ans[index++] = arr2[right++];
//   }
//   for (let i = 0; i < m + n; i++) {
//     // if (i < m) arr1[i] = ans[i];
//     // else arr2[i - m] = ans[i];
//     arr1[i] = ans[i];
//   }
// //   return ans
//   return arr1;
// }
// console.log(mergeSort([1, 3, 5, 7], 4, [0, 2, 6, 8, 9], 5));
// console.log(mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

//OPtimal

// function mergeSort(arr1, m, arr2, n) {
//   let left = m - 1;
//   let right = 0;
//   while (left >= 0 && right <= n) {
//     if (arr1[left] > arr2[right]) {
//       [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
//       left--;
//       right++;
//     } else {
//       break;
//     }
//   }
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   return { arr1, arr2 };
// }
// console.log(mergeSort([1, 3, 5, 7], 4, [0, 2, 6, 8, 9], 5));

//DSA Question
// function mergeSort(arr1, m, arr2, n) {
//   let left = m - 1;
//   let right = n - 1;
//   let k = m + n - 1;
//   while (left >= 0 && right >= 0) {
//     if (arr1[left] > arr2[right]) {
//       arr1[k] = arr1[left];
//       left--;
//     } else {
//       arr1[k] = arr2[right];
//       right--;
//     }
//     k--;
//   }
//   while (right >= 0) {
//     arr1[k] = arr2[right];
//     right--;
//     k--;
//   }
//   return arr1;
// }
// console.log(mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
