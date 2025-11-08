// Pow(x, n)
// var myPow = function (x, n) {
//   let ans = 1;
//   let power = Math.abs(n);
//   while (power > 0) {
//     if (power % 2 == 1) ans *= x;
//     x *= x;
//     power = Math.floor(power / 2);
//   }
//   return n < 0 ? 1 / ans : ans;
// };
// console.log(myPow(2.0, 10));

function myPow(x, n) {
  if (n == 0) return 1;
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let half = myPow(x, Math.floor(n / 2));
  let res = half * half;
  if (n % 2 == 1) {
    res = res * x;
  }
  return res;
}
console.log(myPow(2.0, 10));
