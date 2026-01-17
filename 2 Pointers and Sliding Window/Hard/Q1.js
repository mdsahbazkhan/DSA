// Subarrays with K Different Integers
function subarraysWithKDistinct(nums, k) {
  let n = nums.length;
  let count = 0;
  let mpp = new Map();
  for (let i = 0; i < n; i++) {
    mpp.clear();
    for (let j = i; j < n; j++) {
      mpp.set(nums[j], (mpp.get(nums[j]) || 0) + 1);
      if (mpp.size == k) {
        count++;
      } else if (mpp.size > k) {
        break;
      }
    }
  }

  return count;
}
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));

//Optimal
var subarraysWithKDistinct = function (nums, k) {
  function exact(m) {
    let l = 0;
    let r = 0;
    let n = nums.length;
    let mpp = new Map();
    let count = 0;
    while (r < n) {
      mpp.set(nums[r], (mpp.get(nums[r]) || 0) + 1);
      while (mpp.size > m) {
        mpp.set(nums[l], mpp.get(nums[l]) - 1);
        if (mpp.get(nums[l]) == 0) mpp.delete(nums[l]);
        l++;
      }
      if (mpp.size <= m) count += r - l + 1;
      r++;
    }
    return count;
  }
  return exact(k) - exact(k - 1);
};
console.log(subarraysWithKDistinct([1, 2, 1, 2, 3], 2));
