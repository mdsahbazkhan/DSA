// Longest Repeating Character Replacement
//Brute
// function characterReplacement(s, k) {
//   let n = s.length;
//   let maxLength = 0;
//   for (let i = 0; i < n; i++) {
//     let hash = new Array(26).fill(0);
//     let maxFreq = 0;
//     for (let j = i; j < n; j++) {
//       hash[s.charCodeAt(j) - "A".charCodeAt(0)]++;
//       maxFreq = Math.max(maxFreq, hash[s.charCodeAt(j) - "A".charCodeAt(0)]);
//       let remChars = j - i + 1 - maxFreq;
//       if (remChars <= k) {
//         maxLength = Math.max(maxLength, j - i + 1);
//       } else {
//         break;
//       }
//     }
//   }
//   return maxLength;
// }
// console.log(characterReplacement("AABABBA", 1));

//Better & Optimal

function characterReplacement(s, k) {
  let n = s.length;
  let l = 0;
  let r = 0;
  let maxFreq = 0;
  let maxLength = 0;
  let hash = new Array(26).fill(0);
  while (r < n) {
    hash[s.charCodeAt(r) - "A".charCodeAt(0)]++;
    maxFreq = Math.max(maxFreq, hash[s.charCodeAt(r) - "A".charCodeAt(0)]);
    let remChars = r - l + 1 - maxFreq;
    // while (remChars > k) {
    //   hash[s.charCodeAt(l) - "A".charCodeAt(0)]--;
    //   maxFreq = 0;
    //   for (let i = 0; i < 26; i++) {
    //     maxFreq = Math.max(maxFreq, hash[i]);
    //   }
    //   l++;
    // }
    if (remChars > k) {
      hash[s.charCodeAt(l) - "A".charCodeAt(0)]--;
      maxFreq = 0;

      l++;
    }
    if (remChars <= k) {
      maxLength = Math.max(maxLength, r - l + 1);
    }
    r++;
  }
  return maxLength;
}
console.log(characterReplacement("AABABBA", 1));
