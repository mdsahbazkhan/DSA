//Word Break

var wordBreak = function (s, wordDict) {
  let st = new Set(wordDict);
  let n = s.length;
  let t = Array(n).fill(-1);

  function solve(idx, s) {
    if (idx == n) {
      return true;
    }
    if (t[idx] != -1) {
      return t[idx];
    }
    for (let l = idx + 1; l <= n; l++) {
      let temp = s.substring(idx, l);
      if (st.has(temp) && solve(l, s)) {
        return (t[idx] = true);
      }
    }
    return (t[idx] = false);
  }
  return solve(0, s);
};
let s = "applepenapple",
  wordDict = ["apple", "pen"];
console.log(wordBreak(s, wordDict));
