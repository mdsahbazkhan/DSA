//Single Number II
//Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
//You must implement a solution with a linear runtime complexity and use only constant extra space.

//Example 1:
//Input: nums = [2,2,3,2]
//Output: 3

//Example 2:
//Input: nums = [0,1,0,1,0,1,99]
//Output: 99

var singleNumber = function (nums) {
  let result = 0;
  for (let k = 0; k <= 31; k++) {
    let temp = 1 << k;
    let count0 = 0;
    let count1 = 0;
    for (let i = 0; i < nums.length; i++) {
      if ((nums[i] & temp) == 0) {
        count0++;
      } else {
        count1++;
      }
    }
    if (count1 % 3 == 1) {
      result = result | temp;
    }
  }
  return result;
};
console.log(singleNumber([2, 2, 2, 9, 4, 4, 4]));
