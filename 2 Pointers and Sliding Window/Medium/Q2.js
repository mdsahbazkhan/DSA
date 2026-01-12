//Max Consecutive Ones III

//Brute
// function longestOnes(nums, k) {
//   let maxLength = 0;
//   let n = nums.length;
//   for (let i = 0; i < n; i++) {
//     let zeros = 0;
//     for (let j = i; j < n; j++) {
//       if (nums[j] === 0) {
//         zeros++;
//       }
//       if (zeros <= k) {
//         maxLength = Math.max(maxLength, j - i + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxLength;
// }
// let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
// let k = 2;
// console.log(longestOnes(nums, k));

//Better
// function longestOnes(nums, k) {
//   let n = nums.length;
//   let l = 0;
//   let r = 0;
//   let maxLength = 0;
//   let zeros = 0;
//   while (r < n) {
//     if (nums[r] === 0) zeros++;
//     while (zeros > k) {
//       if (nums[l] === 0) zeros--;
//       l++;
//     }
//     if (zeros <= k) {
//       maxLength = Math.max(maxLength, r - l + 1);
//     }
//     r++;
//   }
//   return maxLength;
// }

//Optimal
function longestOnes(nums, k) {
  let n = nums.length;
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let zeros = 0;
  while (r < n) {
    if (nums[r] === 0) zeros++;
    if (zeros > k) {
      if (nums[l] === 0) zeros--;
      l++;
    }
    if (zeros <= k) {
      maxLength = Math.max(maxLength, r - l + 1);
    }
    r++;
  }
  return maxLength;
}

let nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0];
let k = 2;
console.log(longestOnes(nums, k));

