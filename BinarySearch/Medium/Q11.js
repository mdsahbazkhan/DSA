// Capacity To Ship Packages Within D Days

//Brute force

// var shipWithinDays = function (weights, days) {
//   let maxweights = Math.max(...weights);
//   let maxCapacity = weights.reduce((a, b) => a + b, 0);
//   for (let capacity = maxweights; capacity <= maxCapacity; capacity++) {
//     if (canShip(weights, days, capacity)) {
//       return capacity;
//     }
//   }
//   return maxCapacity;
// };

function canShip(weights, days, capacity) {
  let currentLoad = 0;
  let neededDays = 1;
  for (let i = 0; i < weights.length; i++) {
    if (currentLoad + weights[i] > capacity) {
      neededDays++;
      currentLoad = 0;
    }
    currentLoad += weights[i];
  }
  return neededDays <= days;
}
console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));

// Optimal

function shipWithinDays(weights, days) {
  let low = Math.max(...weights);
  let high = weights.reduce((a, b) => a + b, 0);
  let ans = -1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (canShip(weights, days, mid)) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return ans;
}
