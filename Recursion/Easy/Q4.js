//Subset Sum I

function subsetSum(arr) {
  const result = [];

  function helper(index, currentSum) {
    if (index === arr.length) {
      result.push(currentSum);
      return;
    }

    helper(index + 1, currentSum + arr[index]);

    helper(index + 1, currentSum);
  }

  helper(0, 0);
  result.sort((a, b) => a - b);
  return result;
}

const nums = [3, 1, 2];
console.log(subsetSum(nums));
