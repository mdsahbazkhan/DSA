//Combination Sum III

var combinationSum3 = function (k, n) {
  let ans = [];
  backtrack(1, 0, k, n, [], ans);
  return ans;
};
function backtrack(ind, sum, k, n, temp, ans) {
  if (temp.length == k) {
    if (sum === n) {
      ans.push([...temp]);
    }
    return;
  }

  for (let i = ind; i <= 9; i++) {
    if (sum + i > n) return;
    temp.push(i);
    backtrack(i + 1, sum + i, k, n, temp, ans);
    temp.pop();
  }
}
console.log(combinationSum3(3, 9));
