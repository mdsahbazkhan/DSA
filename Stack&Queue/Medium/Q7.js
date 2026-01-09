//Stockpanner span

function StockSpanner(prices) {
  let st = [];
  let ans = [];
  for (let i = 0; i < prices.length; i++) {
    while (st.length && prices[st[st.length - 1]] <= prices[i]) {
      st.pop();
    }
    if (!st.length) {
      ans.push(i + 1);
    } else {
      ans.push(i - st[st.length - 1]);
    }
    st.push(i);
  }
  return ans;
}
console.log(StockSpanner([100, 80, 60, 70, 60, 75, 85]));
