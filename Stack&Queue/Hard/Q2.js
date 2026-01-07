// Largest Rectangle in Histogram

var largestRectangleArea = function (heights) {
  let n = heights.length;
  let ans = 0;
  let st = [];
  let right = new Array(n);
  let left = new Array(n);
  //Right Small nearest
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && heights[st[st.length - 1]] >= heights[i]) {
      st.pop();
    }
    right[i] = st.length == 0 ? n : st[st.length - 1];
    st.push(i);
  }
  st = [];
  //Left Small nearest
  for (let i = 0; i < n; i++) {
    while (st.length && heights[st[st.length - 1]] >= heights[i]) {
      st.pop();
    }
    left[i] = st.length == 0 ? -1 : st[st.length - 1];
    st.push(i);
  }

  for (let i = 0; i < n; i++) {
    let width = right[i] - left[i] - 1;
    let currArea = heights[i] * width;
    ans = Math.max(ans, currArea);
  }
  return ans;
};
console.log(largestRectangleArea([2, 1, 5, 6, 2, 3]));
