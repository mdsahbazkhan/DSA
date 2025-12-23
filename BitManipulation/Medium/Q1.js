//Divide Two Integers without division operator

var divide = function (dividend, divisor) {
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  if (dividend == divisor) return 1;
  if (divisor === 1) return dividend;
  if (divisor === -1) {
    if (dividend === INT_MIN) return INT_MAX;
    return -dividend;
  }
  let sign = true;
  if ((dividend < 0 && divisor > 0) || (dividend > 0 && divisor < 0)) {
    sign = false;
  }
  let N = Math.abs(dividend);
  let D = Math.abs(divisor);
  let ans = 0;
  while (N >= D) {
    let count = 0;
    while (N >= D * 2 ** (count + 1)) {
      count++;
    }
    ans += 1 << count;
    N = N - D * (1 << count);
  }
  if (ans > INT_MAX) return sign ? INT_MAX : INT_MIN;
  return sign ? ans : -ans;
};
console.log(divide(22, 3));
