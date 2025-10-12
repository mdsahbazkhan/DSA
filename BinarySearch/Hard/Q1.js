//Allocate Books |Split Array Largest Sum | Painter's Partition Problem

//Brute force

// function findPages(arr, S) {
//   let low = Math.max(...arr);
//   let high = arr.reduce((a, b) => a + b, 0);
//   if (S > arr.length) return -1;
//   for (let pages = low; pages <= high; pages++) {
//     if (countStudent(arr, pages) == S) {
//       return pages;
//     }
//   }
// }
// console.log(findPages([12, 34, 67, 90], 2));

function countStudent(arr, pages) {
  let countStudent = 1;
  let pagesStudent = 0;
  for (let i = 0; i < arr.length; i++) {
    if (pagesStudent + arr[i] <= pages) {
      pagesStudent += arr[i];
    } else {
      countStudent++;
      pagesStudent = arr[i];
    }
  }
  return countStudent;
}

//Optimal

function findPages(arr, S) {
  let low = Math.max(...arr);
  let high = arr.reduce((a, b) => a + b, 0);
  if (S > arr.length) return -1;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (countStudent(arr, mid) <= S) {
      ans = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
console.log(findPages([12, 34, 67, 90], 2));
