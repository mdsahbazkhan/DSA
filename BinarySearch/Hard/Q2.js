// Minimize Max Distance to Gas Station

//Brute force

// function MinimiseMaxDistance(arr, k) {
//   let n = arr.length;
//   let howMany = new Array(n - 1).fill(0);
//   for (let gasStation = 1; gasStation <= k; gasStation++) {
//     let maxSection = -1;
//     let maxInd = -1;
//     for (let i = 0; i < n - 1; i++) {
//       let diff = arr[i + 1] - arr[i];
//       let sectionLength = diff / (howMany[i] + 1);
//       if (sectionLength > maxSection) {
//         maxSection = sectionLength;
//         maxInd = i;
//       }
//     }
//     howMany[maxInd]++;
//   }

//   let maxAns = -1;
//   for (let i = 0; i < n - 1; i++) {
//     let diff = arr[i + 1] - arr[i];
//     let sectionLength = diff / (howMany[i] + 1);
//     maxAns = Math.max(maxAns, sectionLength);
//   }
//   return maxAns;
// }

// console.log(MinimiseMaxDistance([1, 2, 3, 4, 5, 6, 7], 6));

// Optimal

function MinimiseMaxDistance(stations, K) {
  let n = stations.length;
  if (n <= 1) return 0.0;

  let maxGap = -1;
  for (let i = 0; i < n - 1; i++) {
    maxGap = Math.max(maxGap, stations[i + 1] - stations[i]);
  }
  if (maxGap === 0) return 0.0;

  function canPlace(mid) {
    let count = 0;
    for (let i = 0; i < n - 1; i++) {
      let diff = stations[i + 1] - stations[i];

      count += Math.ceil(diff / mid) - 1;
    }
    return count <= K;
  }

  let low = 0;
  let high = maxGap;
  let eps = 1e-6;

  while (high - low > eps) {
    let mid = (low + high) / 2;
    if (canPlace(mid)) {
      high = mid;
    } else {
      low = mid;
    }
  }

  return high;
}
console.log(MinimiseMaxDistance([1, 13, 17, 23], 5));
