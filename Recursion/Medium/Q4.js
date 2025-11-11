// Generate Parentheses

//Brute

// var generateParenthesis = function (n) {
//   let result = [];
//   solve("", n, result);
//   return result;
// };
// function solve(curr, n, result) {
//   if (curr.length === 2 * n) {
//     if (isValid(curr)) {
//       result.push(curr);
//     }
//     return;
//   }
//   solve(curr + "(", n, result);
//   solve(curr + ")", n, result);
// }
// function isValid(curr) {
//   let count = 0;
//   for (const str of curr) {
//     if (str == "(") {
//       count++;
//     } else if (str == ")") {
//       count--;
//       if (count < 0) return false;
//     }
//   }
//   return count == 0;
// }
// console.log(generateParenthesis(3));

//Optimal
var generateParenthesis = function (n) {
  let result = [];
  solve("", 0, 0, n, result);
  return result;
};

function solve(curr, open, close, n, result) {
  if (curr.length === 2 * n) {
    result.push(curr);

    return;
  }
  if (open < n) {
    solve(curr + "(", open + 1, close, n, result);
  }
  if (close < open) {
    solve(curr + ")", open, close + 1, n, result);
  }
}
console.log(generateParenthesis(3));
