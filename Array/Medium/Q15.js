// Count number of subarrays with given xor K
//Brute
function countSubarr(arr, k) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let xor = 0;
    for (let j = i; j < n; j++) {
      xor ^= arr[j];
      if (xor == k) count++;
    }
  }
  return count;
}
console.log(countSubarr([4, 3, 1, 2, 4], 0));

//Optimal
// var beautifulSubarrays = function (nums) {
//   function countSubarr(arr, k) {
//     let n = arr.length;
//     let map = new Map();
//     map.set(0, 1);
//     let xor = 0;
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//       xor ^= arr[i];
//       if (map.has(xor ^ k)) {
//         count += map.get(xor ^ k);
//       }
//       map.set(xor, (map.get(xor) || 0) + 1);
//     }
//     return count;
//   }
//   return countSubarr(nums, 0);
// };
// console.log(beautifulSubarrays([4, 3, 1, 2, 4]));
