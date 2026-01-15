//  Count Number of Nice Subarrays

var numberOfSubarrays = function (nums, k) {
  function atMost(k) {
    if (k < 0) return 0;
    let n = nums.length;
    let l = 0;
    let r = 0;
    let count = 0;
    let sum = 0;
    while (r < n) {
      sum += nums[r] % 2;
      while (sum > k) {
        sum -= nums[l] % 2;
        l++;
      }
      count += r - l + 1;
      r++;
    }
    return count;
  }
  return atMost(k) - atMost(k - 1);
};
console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
