// Binary search with recusive

// var search = function (nums, target) {
//   let n = nums.length;
//   return binarySearchRecursion(nums, 0, n - 1, target);
// };
// function binarySearchRecursion(nums, low, high, target) {
//   if (low > high) return -1;
//   let mid = Math.floor((low + high) / 2);
//   if (nums[mid] == target) return mid;
//   else if (nums[mid] < target)
//     return binarySearchRecursion(nums, mid + 1, high, target);
//   return binarySearchRecursion(nums, low, mid - 1, target);
// }

// console.log(search([-1, 0, 3, 5, 9, 12], 9));

//  Binary search without recusive

var search = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12], 9));
