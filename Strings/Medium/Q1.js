// Reverse Words in a String

// function reverseWord(str) {
//   let words = str.split(" ");
//   let word = words.filter((word) => word.length > 0);
//   //   let rev = reverseStr(word);
//   //   return rev.join(" ");
//   return word.reverse().join(" ");
// }
// console.log(reverseWord("  hello world  "));

// function reverseStr(str) {
//   let n = str.length;
//   let i = 0;
//   let j = n - 1;
//   while (i < j) {
//     let temp = str[i];
//     str[i] = str[j];
//     str[j] = temp;
//     i++;
//     j--;
//   }
//   return str;
// }

//Optimal
function reverseWord(str) {
  let n = str.length;
  let left = 0;
  let right = n - 1;
  let temp = "";
  let ans = "";
  while (left <= right) {
    let ch = str[left];
    if (ch != " ") {
      temp += ch;
    } else if (ch === " ") {
      if (temp !== "") {
        if (ans !== "") {
          ans = temp + " " + ans;
        } else {
          ans = temp;
        }
        temp = "";
      }
    }
    left++;
  }
  if (temp !== "") {
    if (ans !== "") {
      ans = temp + " " + ans;
    } else {
      ans = temp;
    }
  }
  return ans;
}
console.log(reverseWord("  hello world  "));
