// function postfixToPrefix(s) {
//   let st = [];
//   for (let i = 0; i < s.length; i++) {
//     if (/[a-zA-Z0-9]/.test(s[i])) {
//       st.push(s[i]);
//     } else {
//       let op1 = st.pop();
//       let op2 = st.pop();
//       let exp = `${s[i]}${op2}${op1}`;
//       st.push(exp);
//     }
//   }
//   return st[st.length - 1];
// }

// console.log(postfixToPrefix("AB-DE+F*/"));

//
// function prefixToPostfix(s) {
//   let st = [];
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (/[a-zA-Z0-9]/.test(s[i])) {
//       st.push(s[i]);
//     } else {
//       let op1 = st.pop();
//       let op2 = st.pop();
//       let exp = `${op1}${op2}${s[i]}`;
//       st.push(exp);
//     }
//   }
//   return st[st.length - 1];
// }

// console.log(prefixToPostfix("/-AB*+DEF"));

