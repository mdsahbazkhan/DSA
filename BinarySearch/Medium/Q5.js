//Find Minimum in Rotated Sorted Array

var findMin = function (nums) {
  let ans = Infinity;
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[high]) {
      ans = Math.min(ans, nums[low]);
      break;
    }
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }
  return ans;
};
