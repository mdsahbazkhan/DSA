// Single Element in Sorted Array

//Brute
// function singleEle(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     if (i == 0) {
//       if (arr[i] != arr[i + 1]) return arr[i];
//     } else if (i == n - 1) {
//       if (arr[i] != arr[i + 1]) return arr[i];
//     } else {
//       if (arr[i] != arr[i - 1] && arr[i + 1] != arr[i]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }
// console.log(singleEle([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8]));

//Optimal
function singleEle(arr) {
  let n = arr.length;
  if (n == 1) return arr[0];
  if (arr[0] != arr[1]) return arr[0];
  if (arr[n - 1] != arr[n - 2]) return arr[n - 1];
  let low = 1;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] != arr[mid - 1] && arr[mid] != arr[mid + 1]) {
      return arr[mid];
    }
    if (
      (mid % 2 == 1 && arr[mid] == arr[mid - 1]) ||
      (mid % 2 == 0 && arr[mid] == arr[mid + 1])
    ) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
}
console.log(singleEle([1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 6, 7, 7, 8, 8]));
