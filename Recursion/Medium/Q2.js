// Pow(x, n)
var myPow = function (x, n) {
  let ans = 1;
  let power = Math.abs(n);
  while (power > 0) {
    if (power % 2 == 1) ans *= x;
    x *= x;
    power = Math.floor(power / 2);
  }
  return n < 0 ? 1 / ans : ans;
};
console.log(myPow(2.0, 10));
