// Valid Anagram

// function validAnagram(s, t) {
//   if (s.length != t.length) return false;
//   let sA = s.split("").sort().join("");
//   let tA = t.split("").sort().join("");

//   return sA === tA;
// }
// console.log(validAnagram("listen", "silent"));

function validAnagram(s, t) {
  if (s.length != t.length) return false;
  let sMap = {};
  let tMap = {};
  for (let i = 0; i < s.length; i++) {
    sMap[s[i]] = (sMap[s[i]] || 0) + 1;
    tMap[t[i]] = (tMap[t[i]] || 0) + 1;
  }

  for (let char in sMap) {
    if (sMap[char] !== tMap[char]) {
      return false;
    }
  }

  return true;
}
console.log(validAnagram("listen", "silent"));
