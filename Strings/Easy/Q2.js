//  Largest Odd Number in String

function largestOddNumber(str) {
  let n = str.length;
  let ind = -1;
  let i;
  for (i = n - 1; i >= 0; i--) {
    if (str[i] % 2 == 1) {
      ind = i;
      break;
    }
  }
  if (ind === -1) return "";
  return str.substring(0, ind + 1);
}
console.log(largestOddNumber("239540"));
