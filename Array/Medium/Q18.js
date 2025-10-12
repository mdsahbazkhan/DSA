//Maxium product SubArray

//Brute
// function maxProduct(arr) {
//   let max = -Infinity;
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let product = 1;
//     for (let j = i; j < n; j++) {
//       product *= arr[j];
//       max = Math.max(max, product);
//     }
//   }
//   return max;
// }
// console.log(maxProduct([-1, -2, -9, -6]));

//Optimal
function maxProduct(nums) {
  let n = nums.length;
  let prefix = 1;
  let suffix = 1;
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    if (prefix == 0) prefix = 1;
    if (suffix == 0) suffix = 1;
    prefix *= nums[i];
    suffix *= nums[n - i - 1];
    max = Math.max(max, Math.max(prefix, suffix));
  }
  return max;
}
console.log(maxProduct([-1, -2, -9, -6]));
