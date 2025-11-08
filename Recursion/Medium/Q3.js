function myPow(x, n) {
  let M = 1000000007n;
  let base = BigInt(x);
  let expo = BigInt(n);
  let res = 1n;
  while (expo > 0) {
    if (expo % 2n == 1n) res *= base;
    base = (base * base) % M;
    expo = expo / 2n;
  }
  return res;
}
var countGoodNumbers = function (n) {
  let M = 1000000007n;
  let even = Math.floor((n + 1) / 2);
  let odd = Math.floor(n / 2);
  let evenPow = myPow(5, even);
  let oddPow = myPow(4, odd);
  let ans = (evenPow * oddPow) % M;
  return Number(ans);
};
console.log(countGoodNumbers(1));
