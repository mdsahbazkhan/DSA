// Combination Sum

function combinationSum(candidates, target) {
  let ans = [];
  generateCombination(0, candidates, target, ans, []);
  return ans;
}

function generateCombination(i, arr, target, ans, temp) {
  if (i == arr.length) {
    if (target == 0) {
      ans.push([...temp]);
    }
    return;
  }
  if (arr[i] <= target) {
    temp.push(arr[i]);
    generateCombination(i, arr, target - arr[i], ans, temp);
    temp.pop();
  }
  generateCombination(i + 1, arr, target, ans, temp);
}
console.log(combinationSum([2, 3, 6, 7], 7));
