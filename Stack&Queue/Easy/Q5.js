// Convert Infix to PostFix

// function infixToPostfix(s) {
//   let st = [];
//   let ans = "";

//   const prec = {
//     "+": 1,
//     "-": 1,
//     "*": 2,
//     "/": 2,
//     "^": 3,
//   };
//   for (let ch of s) {
//     if (/[a-zA-Z0-9]/.test(ch)) {
//       ans += ch;
//     } else if (ch === "(") st.push(ch);
//     else if (ch === ")") {
//       while (st.length && st[st.length - 1] !== "(") {
//         ans += st.pop();
//       }
//       st.pop();
//     } else {
//       while (
//         st.length &&
//         st[st.length - 1] !== "(" &&
//         (prec[st[st.length - 1]] > prec[ch] ||
//           (prec[st[st.length - 1]] === prec[ch] && ch !== "^"))
//       ) {
//         ans += st.pop();
//       }
//       st.push(ch);
//     }
//   }
//   while (st.length) {
//     ans += st.pop();
//   }
//   return ans;
// }
// console.log(infixToPostfix("a^b^c"));

//Convert Infix to Prefix
function infixToPrefix(s) {
  s = s.split("").reverse().join("");
  let swapped = "";
  for (let ch of s) {
    if (ch === ")") {
      swapped += "(";
    } else if (ch === "(") {
      swapped += ")";
    } else {
      swapped += ch;
    }
  }
  let st = [];
  let postfix = "";

  const prec = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };
  for (let ch of swapped) {
    if (/[a-zA-Z0-9]/.test(ch)) {
      postfix += ch;
    } else if (ch === "(") st.push(ch);
    else if (ch === ")") {
      while (st.length && st[st.length - 1] !== "(") {
        postfix += st.pop();
      }
      st.pop();
    } else {
      while (
        st.length &&
        st[st.length - 1] !== "(" &&
        (prec[st[st.length - 1]] > prec[ch] ||
          (prec[st[st.length - 1]] === prec[ch] && ch === "^"))
      ) {
        postfix += st.pop();
      }
      st.push(ch);
    }
  }
  while (st.length) {
    postfix += st.pop();
  }
  return postfix.split("").reverse().join("");
}
console.log(infixToPrefix("a^b^c"));
