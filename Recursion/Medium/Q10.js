//Letter Combinations of a Phone Number

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  let result = [];
  function backtrack(idx, temp) {
    if (idx === digits.length) {
      result.push(temp);
      return;
    }
    let letter = map[digits[idx]];
    for (let i = 0; i < letter.length; i++) {
      backtrack(idx + 1, temp + letter[i]);
    }
  }
  backtrack(0, "");
  return result;
}
console.log(letterCombinations("23"));
