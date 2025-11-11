// Generate All Subsets (Power Set)

var subsets = function (nums) {
  let result = [];
  let temp = [];
  solve(0, nums, temp, result);

  return result;
};

function solve(i, nums, temp, result) {
  if (i == nums.length) {
    result.push([...temp]);
    return;
  }
  temp.push(nums[i]);
  solve(i + 1, nums, temp, result);
  temp.pop();
  solve(i + 1, nums, temp, result);
}

console.log(subsets([1, 2, 3]));
