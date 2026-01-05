// Sum of Subarray Minimums
//Brute

function sumSubarrayMins(arr) {
  let sum = 0;
  let mod = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      sum = (sum + min) % mod;
    }
  }
  return sum;
}

//Optimal
var sumSubarrayMins = function (arr) {
  let n = arr.length;
  let NSL = getNSL(arr, n);
  let NSR = getNSR(arr, n);
  let sum = 0;
  let mod = 1e9 + 7;
  for (let i = 0; i < n; i++) {
    let ls = i - NSL[i];
    let rs = NSR[i] - i;
    let totalWays = ls * rs; //no of sub array
    let totalSum = totalWays * arr[i];
    sum = (sum + totalSum) % mod;
  }
  return sum;
};
function getNSL(arr, n) {
  let result = new Array(n).fill(-1);
  let st = [];
  for (let i = 0; i < n; i++) {
    if (st.length == 0) {
      result[i] = -1;
    } else {
      while (st.length && arr[st[st.length - 1]] >= arr[i]) {
        st.pop();
      }
      result[i] = st.length === 0 ? -1 : st[st.length - 1];
    }
    st.push(i);
  }
  return result;
}
function getNSR(arr, n) {
  let result = new Array(n).fill(-1);
  let st = [];
  for (let i = n - 1; i >= 0; i--) {
    if (st.length == 0) {
      result[i] = n;
    } else {
      while (st.length && arr[st[st.length - 1]] > arr[i]) {
        st.pop();
      }
      result[i] = st.length === 0 ? n : st[st.length - 1];
    }
    st.push(i);
  }
  return result;
}
console.log(sumSubarrayMins([3, 1, 2, 4]));
