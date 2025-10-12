// Finding Sqrt of a number

//Brute

// function findSqrt(n) {
//   let ans = 1;
//   for (let i = 1; i < n; i++) {
//     if (i * i <= n) {
//       ans = i;
//     } else {
//       break;
//     }
//   }
//   return ans;
// }
// console.log(findSqrt(63));

// Optimal

function findSqrt(n) {
  let ans = 1;
  let low = 1;
  let high = n;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (mid * mid > n) {
      high = mid - 1;
    } else if (mid * mid <= n) {
      ans = mid;
      low = mid + 1;
    }
  }
  return ans;
}
console.log(findSqrt(63));
