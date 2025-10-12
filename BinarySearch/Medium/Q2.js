// Count occurrences in Array

function firstOccurence(arr, n, target) {
  let first = -1;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return first;
}
function lastOccurence(arr, n, target) {
  let last = -1;
  let low = 0;
  let high = n - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == target) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return last;
}

function countOccurence(nums, target) {
  let n = nums.length;
  let fO = firstOccurence(nums, n, target);
  let lO = lastOccurence(nums, n, target);

  return lO - fO + 1;
}
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(countOccurence(nums, target));
