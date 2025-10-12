//  Koko Eating Bananas

// function minEatingSpeed(piles, h) {
//   for (let i = 1; i <= Math.max(...piles); i++) {
//     let requireTime = eatingBanana(piles, i);

//     if (requireTime <= h) {
//       return i;
//     }
//   }
// }
// console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));

function eatingBanana(piles, hourly) {
  let totalHour = 0;
  for (let i = 0; i < piles.length; i++) {
    totalHour += Math.ceil(piles[i] / hourly);
  }
  return totalHour;
}

//optimal
function minEatingSpeed(piles, h) {
  let low = 1;
  let high = Math.max(...piles);
  let ans = 0;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let requireTime = eatingBanana(piles, mid);
    if (requireTime <= h) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}

console.log(minEatingSpeed([30, 11, 23, 4, 20], 5));
