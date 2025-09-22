//  Find Peak Element

// Brute Force
function findPeakEle(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (
      (i == 0 || arr[i - 1] < arr[i]) &&
      (i == n - 1 || arr[i] > arr[i + 1])
    ) {
      return i;
    }
  }
  retrun - 1;
}
console.log(findPeakEle([1, 2, 3, 1]));

//Optimal

// function findPeakEle(arr) {
//   let n = arr.length;
//   let low = 1;
//   let high = n - 2;
//   if (n == 1) return 0;
//   if (arr[0] > arr[1]) return 0;
//   if (arr[n - 1] > arr[n - 2]) return n - 1;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);

//     if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) return mid;
//     else if (arr[mid] > arr[mid - 1]) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }
//   retrun - 1;
// }
// console.log(findPeakEle([1, 2, 3, 1]));
