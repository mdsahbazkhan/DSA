// Kth Missing Positive Number

// Brute force
// var findKthPositive = function (arr, k) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (arr[i] < k) {
//       k++;
//     } else {
//       break;
//     }
//   }
//   return k;
// };
// console.log(findKthPositive([2, 3, 4, 7, 11], 3));

// Optimal
// var findKthPositive = function (arr, k) {
//   let n = arr.length;
//   let low = 0;
//   let high = n - 1;
//   while (low <= high) {
//     const mid = Math.floor((low + high) / 2);
//     const missing = arr[mid] - (mid + 1);
//     if (missing < k) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   return high + k + 1;
//   //   return low + k;
// };
// console.log(findKthPositive([2,3,4,7,11], 5));

// formula
// ans->arr[high]+more;
// ans=arr[high]+k-missing;
// ans=arr[high]+k-(arr[high] - (high + 1));
// ans=arr[high]+k-arr[high] + (high + 1);
// ans= high+k+1
