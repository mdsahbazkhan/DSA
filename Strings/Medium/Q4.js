//  String to Integer (atoi)
//Brute
function myAtoi(str) {
  str = str.trim();
  let sign = 1;
  let numStr = "";

  if (str[0] === "-") {
    sign = -1;
    str = str.slice(1);
  } else if (str[0] === "+") {
    str = str.slice(1);
  }

  for (let ch of str) {
    if (ch >= "0" && ch <= "9") numStr += ch;
    else break;
  }

  return numStr === "" ? 0 : sign * Number(numStr);
}
//Optimal
function myAtoi(str) {
  let trimstr = str.trim();
  let sign = 1;
  let num = 0;
  let i = 0;
  let INT_MAX = 2 ** 31 - 1;
  let INT_MIN = -(2 ** 31);
  if (trimstr[0] === "-") {
    sign = -1;
    i++;
  } else if (trimstr[0] === "+") i++;
  while (i < trimstr.length && trimstr[i] >= "0" && trimstr[i] <= "9") {
    num = num * 10 + (trimstr[i].charCodeAt(0) - 48);
    if (num * sign > INT_MAX) return INT_MAX;
    if (num * sign < INT_MIN) return INT_MIN;
    i++;
  }

  return num * sign;
}
console.log(myAtoi("  -43214abcd  "));
