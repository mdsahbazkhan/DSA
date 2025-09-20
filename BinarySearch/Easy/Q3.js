//Find out how many times the array is rotated

function findRotationIndex(nums) {
  let ans = Infinity;
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  let index = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (nums[low] <= nums[high]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }
      break;
    }
    if (nums[low] <= nums[mid]) {
      if (nums[low] < ans) {
        ans = nums[low];
        index = low;
      }
      low = mid + 1;
    } else {
      if (nums[mid] < ans) {
        ans = nums[mid];
        index = mid;
      }
      high = mid - 1;
    }
  }
  return index;
}
console.log(findRotationIndex([4, 5, 6, 7, 0, 1, 2, 3]));
