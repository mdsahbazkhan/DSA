// Find Occurrences of an Element in an Array

function findOccurence(arr, queries, x) {
  let occurIndex = [];
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      occurIndex.push(i);
    }
  }
  let occurLength = occurIndex.length;
  index = 0;
  let ans = [];
  for (let i = 0; i < queries.length; i++) {
    if (queries[i] <= occurLength) {
      //   ans.push(occurIndex[index]);
      ans.push(occurIndex[queries[i] - 1]);
      index++;
    } else {
      ans.push(-1);
    }
  }
  return ans;
}
console.log(findOccurence([1, 3, 1, 7], [1, 3, 2, 4], 1));
