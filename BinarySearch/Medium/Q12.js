// Aggressive Cows

// function aggressiveCows(arr, cows) {
//   arr.sort((a, b) => a - b);
//   let n = arr.length;

//   for (let i = 1; i <= arr[n - 1] - arr[0]; i++) {
//     if (canWePlace(arr, cows, i)) {
//       continue;
//     } else {
//       return i - 1;
//     }
//   }
//   return arr[n - 1] - arr[0];
// }
// console.log(aggressiveCows([4, 2, 1, 3, 6], 2));

function canWePlace(arr, cows, distance) {
  let countcows = 1;
  let last = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - last >= distance) {
      countcows++;
      last = arr[i];
    }
    if (countcows >= cows) {
      return true;
    }
  }
  return false;
}

function aggressiveCows(arr, cows) {
  arr.sort((a, b) => a - b);
  let n = arr.length;
  let low = 0;
  let high = arr[n - 1] - arr[0];

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canWePlace(arr, cows, mid)) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return high;
}
console.log(aggressiveCows([4, 2, 1, 3, 6], 2));
