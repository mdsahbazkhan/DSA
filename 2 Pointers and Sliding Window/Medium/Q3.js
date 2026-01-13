//Fruit Into Baskets

//Brute
function totalFruit(fruits) {
  let n = fruits.length;
  let maxLength = 0;
  for (let i = 0; i < n; i++) {
    let mpp = new Map();
    for (let j = i; j < n; j++) {
      mpp.set(fruits[j], (mpp.get(fruits[j]) || 0) + 1);
      if (mpp.size > 2) {
        break;
      }
      maxLength = Math.max(maxLength, j - i + 1);
    }
  }
  return maxLength;
}

// Optimal
var totalFruit = function (fruits) {
  let n = fruits.length;
  let l = 0;
  let r = 0;
  let maxLength = 0;
  let mpp = new Map();
  while (r < n) {
      mpp.set(fruits[r], (mpp.get(fruits[r]) || 0) + 1);
      if (mpp.size > 2) {
          mpp.set(fruits[l], mpp.get(fruits[l]) - 1);
          if (mpp.get(fruits[l]) == 0) {
              mpp.delete(fruits[l]);
            }
            l++;
        }
    if (mpp.size <= 2) {
        maxLength = Math.max(maxLength, r - l + 1);
    }
    r++;
}
return maxLength;
};

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));