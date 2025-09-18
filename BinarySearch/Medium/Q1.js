// Find First and Last Position of Element in Sorted Array

//Brute
// function firstAndLastOccur(arr, target) {
//   let first = -1;
//   let last = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == target) {
//       if (first == -1) first = i;
//       last = i;
//     }
//   }
//   return [first, last];
// }
// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;
// console.log(firstAndLastOccur(nums, target));

//Optimal
// function lowerBound(arr, n, target) {
//   let low = 0;
//   let high = n - 1;
//   let ans = n;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] >= target) {
//       ans = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return ans;
// }

// function upperBound(arr, n, target) {
//   let low = 0;
//   let high = n - 1;
//   let ans = n;
//   while (low <= high) {
//     let mid = Math.floor((low + high) / 2);
//     if (arr[mid] > target) {
//       ans = mid;
//       high = mid - 1;
//     } else {
//       low = mid + 1;
//     }
//   }
//   return ans;
// }
// function firstAndLastOccur(nums, target) {
//   let n = nums.length;
//   let lb = lowerBound(nums, n, target);
//   if (lb == n || nums[lb] != target) {
//     return [-1, -1];
//   }
//   let ub = upperBound(nums, n, target);
//   return [lb, ub - 1];
// }
// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;
// console.log(firstAndLastOccur(nums, target));
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

function searchOccurence(nums, target) {
  let n = nums.length;
  let fO = firstOccurence(nums, n, target);
  let lO = lastOccurence(nums, n, target);

  return [fO, lO];
}
const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(searchOccurence(nums, target));
