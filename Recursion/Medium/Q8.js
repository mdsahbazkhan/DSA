//Subset Sum II

var subsetsWithDup = function (nums) {
  nums.sort((a, b) => a - b);
  let ansList = [];
  findSubsets(0, nums, [], ansList);
  return ansList;
};
function findSubsets(ind, nums, temp, ansList) {
  ansList.push([...temp]);
  for (let i = ind; i < nums.length; i++) {
    if (i != ind && nums[i] == nums[i - 1]) continue;
    temp.push(nums[i]);
    findSubsets(i + 1, nums, temp, ansList);
    temp.pop();
  }
}
console.log(subsetsWithDup([1, 2, 2, 3, 3]));
