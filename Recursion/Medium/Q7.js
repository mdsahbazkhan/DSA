//Combination Sum II

var combinationSum2 = function (candidates, target) {
  let ans = [];
  candidates.sort((a, b) => a - b);
  findCombination(0, candidates, target, ans, []);
  return ans;
};
function findCombination(index, arr, target, ans, temp) {
  if (target == 0) {
    ans.push([...temp]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) continue;
    if (arr[i] > target) break;
    temp.push(arr[i]);
    findCombination(i + 1, arr, target - arr[i], ans, temp);
    temp.pop();
  }
}
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
