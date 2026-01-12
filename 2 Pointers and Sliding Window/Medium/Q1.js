// Longest Substring Without Repeating Characters
function subStringWithoutRepeatChar(s) {
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
    let mpp = new Array(256).fill(0);
    for (let j = i; j < s.length; j++) {
      if (mpp[s.charCodeAt(j)] === 1) {
        break;
      }
      let len = j - i + 1;
      longest = Math.max(longest, len);
      mpp[s.charCodeAt(j)] = 1;
    }
  }
  return longest;
}
const s = "cadbzabcd";
console.log(subStringWithoutRepeatChar(s));

//Optimal

var lengthOfLongestSubstring = function (s) {
  let n = s.length;
  let maxLength = 0;
  let l = 0;
  let r = 0;
  let mpp = new Array(256).fill(-1);
  while (r < n) {
    if (mpp[s.charCodeAt(r)] !== -1) {
      if (mpp[s.charCodeAt(r)] >= l) {
        l = mpp[s.charCodeAt(r)] + 1;
      }
    }
    let len = r - l + 1;
    maxLength = Math.max(len, maxLength);
    mpp[s.charCodeAt(r)] = r;
    r++;
  }
  return maxLength;
};
console.log(lengthOfLongestSubstring("abcabcbb"));
