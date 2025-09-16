// Reverse Pairs
// function reversePairs(arr) {
//   let n = arr.length;
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       if (arr[i] > 2 * arr[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(reversePairs([2, 4, 3, 5, 1]));

function countPairs(arr, low, mid, high) {
  let right = mid + 1;
  let count = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) {
      right++;
    }
    count += right - (mid + 1);
  }
  return count;
}

function mergeSort(arr, low, high) {
  if (low >= high) return 0;
  let count = 0;
  let mid = Math.floor((low + high) / 2);
  count += mergeSort(arr, low, mid);
  count += mergeSort(arr, mid + 1, high);
  count += countPairs(arr, low, mid, high);
  merge(arr, low, mid, high);
  return count;
}

function merge(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function reversePairs(arr) {
  let n = arr.length;
  return mergeSort(arr, 0, n - 1);
}
console.log(reversePairs([2, 4, 3, 5, 1]));
