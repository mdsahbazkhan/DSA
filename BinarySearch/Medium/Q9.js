//  Minimum Number of Days to Make m Bouquets

//Brute Force

// function minDays(arr, m, k) {
//     let n = arr.length;
//     if (n < m * k) return -1;
//     for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
//         if (calculateBouquets(arr, i, m, k) == true) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(minDays([1, 10, 3, 10, 2], 3, 2));

function calculateBouquets(arr, bloomday, m, k) {
  let count = 0;
  let Bouquets = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= bloomday) {
      count++;
    } else {
      Bouquets += Math.floor(count / k);
      count = 0;
    }
  }
  Bouquets += count / k;

  return Bouquets >= m ? true : false;
}

//Optimal
var minDays = function (bloomDay, m, k) {
  let low = Math.min(...bloomDay);
  let high = Math.max(...bloomDay);
  let ans = high;
  if (bloomDay.length < m * k) return -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (calculateBouquets(bloomDay, mid, m, k) == true) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
};
console.log(minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
