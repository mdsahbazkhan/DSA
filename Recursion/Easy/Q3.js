//Print subsequence with sum K (All or One)

// var subsets = function (nums) {
//   let temp = [];
//   let sum = 2;
//   solve(0, 0, nums, temp, sum);
// };

// function solve(i, s, nums, temp, sum) {
//   if (i == nums.length) {
//     if (s == sum) {
//       console.log(temp);
//       return true;
//     }
//     return false;
//   }
//   temp.push(nums[i]);
//   s += nums[i];
//   if (solve(i + 1, s, nums, temp, sum) == true) {
//     return true;
//   }

//   temp.pop();
//   s -= nums[i];

//   if (solve(i + 1, s, nums, temp, sum) == true) {
//     return true;
//   }
//   return false;
// }

// subsets([1, 2, 1]);

//Count all subsequences with sum K

var subsets = function (nums) {
  let temp = [];
  let sum = 2;
  let result = solve(0, 0, nums, temp, sum);
  return result;
};

function solve(i, s, nums, temp, sum) {
  if (i == nums.length) {
    if (s == sum) {
      return 1;
    }
    return 0;
  }
  temp.push(nums[i]);
  s += nums[i];
  let l = solve(i + 1, s, nums, temp, sum) == true;
  temp.pop();
  s -= nums[i];

  let r = solve(i + 1, s, nums, temp, sum) == true;
  return l + r;
}

console.log(subsets([1, 2, 1]));
