// Maximum Nesting Depth of the Parentheses

function maxDepth(str) {
  let n = str.length;
  let res = 0;
  let current = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] == "(") {
      current++;
      res = Math.max(res, current);
    } else if (str[i] == ")") {
      current--;
    }
  }
  return res;
}
console.log(maxDepth("()()((()))(())"));
