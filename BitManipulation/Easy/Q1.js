// Find xor of numbers from L to R

function nXOR(n) {
  if (n % 4 == 1) return 1;
  else if (n % 4 == 2) return n + 1;
  else if (n % 4 == 3) return 0;
  else return n;
}

function xorInRange(a, b) {
  return nXOR(a - 1) ^ nXOR(b);
}
console.log(xorInRange(5, 7));
