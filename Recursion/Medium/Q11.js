//Palindrome Partitioning
var partition = function (s) {
  let res = [];
  function backtrack(idx, curr) {
    if (idx === s.length) {
      res.push([...curr]);
      return;
    }
    for (let i = idx; i < s.length; i++) {
      if (isPalindrome(s, idx, i)) {
        curr.push(s.substring(idx, i + 1));
        backtrack(i + 1, curr);
        curr.pop();
      }
    }
  }
  backtrack(0, []);
  return res;
};
function isPalindrome(s, left, right) {
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(partition("aab"));
