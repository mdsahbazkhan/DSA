// find Kth element of 2 sorted arrays

function kthElement(arr1, arr2, k) {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let n = n1 + n2;
  if (n1 > n2) return kthElement(arr2, arr1, k);
  let low = Math.max(k - n2, 0);
  let high = Math.min(k, n1);
  let left = k;
  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;
    if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
    if (mid1 < n1) r1 = arr1[mid1];
    if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1];
    if (mid2 < n2) r2 = arr2[mid2];
    if (l1 <= r2 && l2 <= r1) {
      return Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }
}
console.log(kthElement([2, 3, 6, 15], [1, 3, 4, 7, 10, 12], 4));
