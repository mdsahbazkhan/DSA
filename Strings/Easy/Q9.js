function seconLargetStr(str) {
  let trimStr = str.trim();
  let largest = -Infinity;
  let secLargest = -Infinity;
  let count = 0;
  for (let i = 0; i < trimStr.length; i++) {
    if (trimStr[i] != " ") {
      count++;
    }
    if (trimStr[i] == " " || i == trimStr.length - 1) {
      if (count > largest) {
        secLargest = largest;
        largest = count;
      } else if (count > secLargest && count < largest) {
        secLargest = count;
      }
      count = 0;
    }
  }
  return secLargest;
}
console.log(seconLargetStr("My name is Sahbaz Khan"));
