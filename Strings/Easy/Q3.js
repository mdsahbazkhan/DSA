// Longest Common Prefix
//Brute
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  let prefix = "";
  let first = strs[0];

  for (let i = 0; i < first.length; i++) {
    let char = first[i];

    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== char) {
        return prefix;
      }
    }

    prefix += char;
  }

  return prefix;
}
console.log(
  longestCommonPrefix(["interspecies", "interstellar", "interstate"])
); // "inters"

//Optimal
function longestCommonPrefix(str) {
  if (str.length === 0) return "";
  str.sort();
  let first = str[0];
  let last = str[str.length - 1];
  let commonPrefix = "";
  for (let i = 0; i < Math.min(first.length, last.length); i++) {
    if (first[i] !== last[i]) {
      break;
    }
    commonPrefix += first[i];
  }
  return commonPrefix;
}
console.log(longestCommonPrefix([""]));
