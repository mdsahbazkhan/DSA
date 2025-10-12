// 	Find the Nth root of a number using binary search

//Brute Force

// function NthRoot(n, m) {
//   for (let i = 1; i < m; i++) {
//     if (findExponential(i, n) == m) {
//       return i;
//     } else if (findExponential(i, n) > m) {
//       break;
//     }
//   }
//   return -1;
// }
// console.log(NthRoot(4, 67));
// function findExponential(i, n) {
//   let expo = Math.pow(i, n);
//   return expo;
// }

//Optimal

function NthRoot(n, m) {
  let low = 1;
  let high = m;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (findExponential(mid, n) == m) return mid;
    else if (findExponential(mid, n) < m) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(NthRoot(4, 81));

function findExponential(i, n) {
  let expo = Math.pow(i, n);
  return expo;
}
