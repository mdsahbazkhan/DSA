// Covertion postfix to infix

function postfixToInfix(s) {
  let st = [];
  for (let ch of s) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      st.push(ch);
    } else {
      let op2 = st.pop();
      let op1 = st.pop();
      let exp = `(${op1}${ch}${op2})`;
      st.push(exp);
    }
  }
  return st[st.length - 1];
}
console.log(postfixToInfix("AB-DE+F*/"));

//Prefix to Infix
function prefixToInfix(s) {
  let st = [];
  for (let i = s.length - 1; i >= 0; i--) {
    if (/[a-zA-Z0-9]/.test(s[i])) {
      st.push(s[i]);
    } else {
      let op1 = st.pop();
      let op2 = st.pop();
      let exp = `(${op1}${s[i]}${op2})`;
      st.push(exp);
    }
  }
  return st[st.length - 1];
}

console.log(prefixToInfix("*+PQ-MN"));
