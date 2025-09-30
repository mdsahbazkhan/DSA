// Median of Two Sorted Arrays

//Brute Force
// function findMedianSortedArrays(arr1, arr2) {
//   let n1 = arr1.length;
//   let n2 = arr2.length;
//   let i = 0;
//   let j = 0;
//   let arr3 = [];
//   while (i < n1 && j < n2) {
//     if (arr1[i] <= arr2[j]) {
//       arr3.push(arr1[i]);
//       i++;
//     } else {
//       arr3.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < n1) {
//     arr3.push(arr1[i]);
//     i++;
//   }
//   while (j < n2) {
//     arr3.push(arr2[j]);
//     j++;
//   }
//   let n = n1 + n2;
//   if (n % 2 == 1) {
//     return arr3[Math.floor(n / 2)];
//   } else {
//     return (arr3[n / 2 - 1] + arr3[n / 2]) / 2;
//   }
// }

// console.log(findMedianSortedArrays([1, 3], [2]));

//Better
var findMedianSortedArrays = function (nums1, nums2) {
  let n1 = nums1.length;
  let n2 = nums2.length;
  let n = n1 + n2;
  let index2 = Math.floor(n / 2);
  let index1 = index2 - 1;
  let cnt = 0;
  let i = 0;
  let j = 0;
  let index1Ele = -1;
  let index2Ele = -1;
  while (i < n1 && j < n2) {
    if (nums1[i] <= nums2[j]) {
      if (cnt == index1) index1Ele = nums1[i];
      if (cnt == index2) index2Ele = nums1[i];
      i++;
      cnt++;
    } else {
      if (cnt == index1) index1Ele = nums2[j];
      if (cnt == index2) index2Ele = nums2[j];
      j++;
      cnt++;
    }
  }
  while (i < n1) {
    if (cnt == index1) index1Ele = nums1[i];
    if (cnt == index2) index2Ele = nums1[i];
    i++;
    cnt++;
  }
  while (j < n2) {
    if (cnt == index1) index1Ele = nums2[j];
    if (cnt == index2) index2Ele = nums2[j];
    j++;
    cnt++;
  }
  if (n % 2 == 1) {
    return index2Ele;
  } else {
    return (index1Ele + index2Ele) / 2;
  }
};
console.log(findMedianSortedArrays([1, 3], [2]));
