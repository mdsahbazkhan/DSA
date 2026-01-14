//Binary Subarrays With Sum

//Brute and Better is same as Count Subarrays with Given Sum

//Optimal
var numSubarraysWithSum = function (nums, goal) {
  function atMost(k) {
    if (k < 0) return 0;
    let n = nums.length;
    let l = 0;
    let r = 0;
    let sum = 0;
    let count = 0;
    while (r < n) {
      sum += nums[r];
      while (sum > k) {
        sum = sum - nums[l];
        l++;
      }
      count += r - l + 1;
      r++;
    }
    return count;
  }
  return atMost(goal) - atMost(goal - 1);
};
