var removeKdigits = function (num, k) {
  let stack = [];
  for (let i = 0; i < num.length; i++) {
    while (k > 0 && stack.length && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }
    stack.push(num[i]);
  }
  while (k > 0) {
    stack.pop();
    k--;
  }
  let result = stack.join("").replace(/^0+/, "");
  return result === "" ? "0" : result;
};
console.log(removeKdigits("1432219", 3));
