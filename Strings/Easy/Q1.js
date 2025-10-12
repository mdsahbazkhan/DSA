//  Remove Outermost Parentheses

//Brute Force
// function removeOuterParentheses(str) {
//   let stack = [];
//   let ans = "";
//   for (let char of str) {
//     if (char == "(") {
//       if (stack.length > 0) ans += char;
//       stack.push(char);
//     } else {
//       stack.pop();
//       if (stack.length > 0) ans += char;
//     }
//   }
//   return ans;
// }
// console.log(removeOuterParentheses("(()())(())"));

//Optimal

function removeOuterParentheses(str) {
  let count = 0;
  let ans = "";
  for (let char of str) {
    if (char == "(") {
      if (count > 0) ans += char;
      count++;
    } else {
      count--;
      if (count > 0) ans += char;
    }
  }
  return ans;
}
console.log(removeOuterParentheses("(()())(())"));
