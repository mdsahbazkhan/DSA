// longest palindromic substring

// function longestSubstring(str) {
//   let maxLength = 0;
//   ans = "";
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       let sub = str.slice(i, j + 1);
//       if (isPalindrome(sub) && sub.length > maxLength) {
//         maxLength = sub.length;
//         ans = sub;
//       }
//     }
//   }
//   return ans;
// }
// console.log(longestSubstring("abrabadaadab"));

// function isPalindrome(str) {
//   let i = 0;
//   let n = str.length;
//   while (i < n / 2) {
//     if (str[i] != str[n - i - 1]) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }

// Optimal
function longestSubstring(str) {
  let maxLength = 1;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let len1 = expand(str, i, i);
    let len2 = expand(str, i, i + 1);
    let len = Math.max(len1, len2);
    if (len > maxLength) {
      maxLength = len;
      start = i - Math.floor((len - 1) / 2);
    }
  }
  return str.substring(start, start + maxLength);
}
console.log(longestSubstring("abrabadaadab"));

function expand(str, left, right) {
  while (left >= 0 && right < str.length && str[left] == str[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}
