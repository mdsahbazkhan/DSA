//The Celebrity Problem

function findCelebrity(n, knows) {
  let st = [];
  for (let i = 0; i < n; i++) {
    st.push(i);
  }
  while (st.length > 1) {
    let i = st[st.length - 1];
    st.pop();
    let j = st[st.length - 1];
    st.pop();
    if (knows(i, j) === false) {
      st.push(i);
    } else {
      st.push(j);
    }
  }
  let celeb = st[st.length - 1];

  for (let i = 0; i < n; i++) {
    if (i != celeb && (knows(i, celeb) == false || knows(celeb, i) == true)) {
      return -1;
    }
  }
  return celeb;
}
console.log(
  findCelebrity(3, function (a, b) {
    let matrix = [
      [0, 1, 0],
      [0, 0, 0],
      [0, 1, 0],
    ];
    return matrix[a][b] === 1;
  })
);
