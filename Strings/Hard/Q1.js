//  Longest Valid Parentheses
//Brute
// function longestValidParentheses(s) {
//   let maxLen = 0;
//   let stack = [-1];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == "(") {
//       stack.push(i);
//     } else {
//       stack.pop();
//       if (stack.length == 0) {
//         stack.push(i);
//       } else {
//         maxLen = Math.max(maxLen, i - stack[stack.length - 1]);
//       }
//     }
//   }
//   return maxLen;
// }

// console.log(longestValidParentheses(")))()()()"));

function longestValidParentheses(s) {
  let left = 0,
    right = 0,
    maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) {
      maxLen = Math.max(maxLen, 2 * right);
    } else if (right > left) {
      left = right = 0;
    }
  }

  left = right = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") left++;
    else right++;

    if (left === right) {
      maxLen = Math.max(maxLen, 2 * left);
    } else if (left > right) {
      left = right = 0;
    }
  }

  return maxLen;
}

console.log(longestValidParentheses(")))()()()"));
