//Trapping Rainwater Problem

// Brute
// var trap = function (height) {
//   let n = height.length;
//   let lMax = new Array(n).fill(0);
//   let rMax = new Array(n).fill(0);
//   lMax[0] = height[0];
//   rMax[n - 1] = height[n - 1];
//   let ans = 0;
//   for (let i = 1; i < n; i++) {
//     lMax[i] = Math.max(lMax[i - 1], height[i]);
//   }
//   for (let j = n - 2; j >= 0; j--) {
//     rMax[j] = Math.max(rMax[j + 1], height[j]);
//   }
//   for (let i = 0; i < n; i++) {
//     ans += Math.min(lMax[i], rMax[i]) - height[i];
//   }
//   return ans;
// };

//Optimal
var trap = function (height) {
  let n = height.length;
  let l = 0;
  let r = n - 1;
  let ans = 0;
  let lMax = 0;
  let rMax = 0;
  while (l < r) {
    lMax = Math.max(lMax, height[l]);
    rMax = Math.max(rMax, height[r]);
    if (lMax < rMax) {
      ans += lMax - height[l];
      l++;
    } else {
      ans += rMax - height[r];
      r--;
    }
  }
  return ans;
};
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
