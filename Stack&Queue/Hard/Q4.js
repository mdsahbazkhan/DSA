// Sliding Window Maximum

//Brute
// function maxSlidingWindow(arr, k) {
//   let n = arr.length;
//   let res = [];
//   for (let i = 0; i <= n - k; i++) {
//     let max = arr[i];
//     for (let j = i; j < i + k - 1; j++) {
//       max = Math.max(max, arr[j + 1]);
//     }
//     res.push(max);
//   }
//   return res;
// }
// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));

//Optimal
var maxSlidingWindow = function (nums, k) {
  let n = nums.length;
  let deque = [];
  let res = [];
  for (let i = 0; i < n; i++) {
    if (deque.length && deque[0] <= i - k) {
      deque.shift();
    }
    while (deque.length && nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop();
    }
    deque.push(i);
    if (i >= k - 1) {
      res.push(nums[deque[0]]);
    }
  }
  return res;
};
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
