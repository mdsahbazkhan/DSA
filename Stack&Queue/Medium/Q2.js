//Next Greater Element II
//Brute

function nextGreaterElementII(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(-1);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= i + n - 1; j++) {
      let index = j % n;
      if (arr[index] > arr[i]) {
        ans[i] = arr[index];
        break;
      }
    }
  }
  return ans;
}
console.log(nextGreaterElementII([2, 10, 12, 1, 11]));


//Optimal
var nextGreaterElements = function (nums) {
    let n = nums.length;
    let st = []
    let nge = new Array(n).fill(-1);
    for (let i = 2 * n - 1; i >= 0; i--) {
        while (st.length && st[st.length - 1] <= nums[i % n]) {
            st.pop();
        }
        if (i < n) {

            nge[i] =st.length==0?-1: st[st.length - 1]


        }
        st.push(nums[i%n]);
    }
    return nge

};