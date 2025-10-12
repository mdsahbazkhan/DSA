// Find the Smallest Divisor Given a Threshold

// function minDivisor(arr, Threshold) {
//     for (let i = 1; i <= Math.max(...arr); i++) {
//         if (helper(arr, i) <= Threshold) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(minDivisor([1, 2, 5, 9], 6));

function helper(arr, i) {
  let sum = 0;
  for (let j = 0; j < arr.length; j++) {
    sum += Math.ceil(arr[j] / i);
  }
  return sum;
}

function minDivisor(arr, threshold) {
  let ans = 0;
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (helper(arr, mid) <= threshold) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
console.log(minDivisor([44, 22, 33, 11, 1], 5));
