//Longest Substring With At Most K Distinct Characters
// function kDistinctChars(k, s) {
//   let n = s.length;
//   let maxLength = 0;
//   let mpp = new Map();
//   for (let i = 0; i < n; i++) {
//     mpp.clear();
//     for (let j = i; j < n; j++) {
//       mpp.set(s[j], (mpp.get(s[j]) || 0) + 1);
//       if (mpp.size <= k) {
//         maxLength = Math.max(maxLength, j - i + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxLength;
// }
// console.log(kDistinctChars(2, "abbbbbbc"));

//Optimal
function kDistinctChars(k, s) {
  let n = s.length;
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let mpp = new Map();
  while (r < n) {
    mpp.set(s[r], (mpp.get(s[r]) || 0) + 1);
    if (mpp.size > k) {
      mpp.set(s[l], mpp.get(s[l]) - 1);
      if (mpp.get(s[l]) == 0) mpp.delete(s[l]);
      l++;
    }
    if (mpp.size <= k) maxLength = Math.max(maxLength, r - l + 1);
    r++;
  }

  return maxLength;
}
console.log(kDistinctChars(2, "abbbbbbc"));
