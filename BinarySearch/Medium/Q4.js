// Search in Rotated Sorted Array II (Duplicate)
var search = function (arr, target) {
  let n = arr.length;
  let low = 0,
    high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return true;
    if (arr[low] == arr[mid] && arr[mid] == arr[high]) {
      low++;
      high--;
      continue;
    }

    // Check if left half is sorted
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= target && target <= arr[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
    // Otherwise, right half is sorted
    else {
      if (arr[mid] <= target && target <= arr[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return false;
};
