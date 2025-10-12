// Lower Bound and Upper Bound

//Lower Bound
function lowerBound(arr, n, target) {
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
console.log(lowerBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 10, 8));

//Upper Bound
function upperBound(arr, n, target) {
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > target) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
console.log(upperBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 10, 8));
