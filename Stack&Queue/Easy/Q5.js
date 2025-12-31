// Convert Infix to PostFix

function infixToPostfix(s) {
  let st = [];
  let ans = "";

  const prec = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  for (let ch of s) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      ans += ch;
    } else if (ch == "(") st.push(ch);
    else if (ch == ")") {
      while (st.length && st[st.length - 1] !== "(") {
        ans += st.pop();
      }
      st.pop();
    } else {
      while (st.length && prec[st[st.length - 1]] >= prec[ch]) {
        ans += st.pop();
      }
      st.push(ch);
    }
  }
  while (st.length) {
    ans += st.pop();
  }
  return ans;
}

console.log(infixToPostfix("a+b*(c^d-e)"));
