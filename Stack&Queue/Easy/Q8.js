var nextGreaterElement = function (nums1, nums2) {
  let n = nums2.length;
  let stack = [];
  let next = new Array(10001).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    let num = nums2[i];
    while (stack.length && stack[stack.length - 1] <= num) {
      stack.pop();
    }
    if (stack.length) {
      next[num] = stack[stack.length - 1];
    }
    stack.push(num);
  }
  return nums1.map((num) => next[num]);
};
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));
