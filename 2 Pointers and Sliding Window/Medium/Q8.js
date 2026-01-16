//Maximum Points You Can Obtain from Cards

var maxScore = function (cardPoints, k) {
  let lSum = 0;
  let rSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    lSum += cardPoints[i];
    maxSum = lSum;
  }
  let rIndex = cardPoints.length - 1;
  for (let i = k - 1; i >= 0; i--) {
    lSum -= cardPoints[i];
    rSum += cardPoints[rIndex];
    rIndex--;
    maxSum = Math.max(maxSum, lSum + rSum);
  }
  return maxSum;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
