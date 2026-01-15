// Number of Substrings Containing All Three Characters
function numberOfSubstrings(s) {
  let count = 0;
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let hash = new Array(3).fill(0);
    for (let j = i; j < n; j++) {
      hash[s.charCodeAt(j) - "a".charCodeAt(0)] = 1;
      if (hash[0] + hash[1] + hash[2] == 3) {
        // count++
        count = count + (n - j);
        break;
      }
    }
  }
  return count;
}
console.log(numberOfSubstrings("bbacba"));

//Optimal
var numberOfSubstrings = function (s) {
  let n = s.length;
  let i = 0;
  let j = 0;
  let hash = new Array(3).fill(0);
  let ans = 0;
  while (j < n) {
    hash[s.charCodeAt(j) - "a".charCodeAt(0)]++;
    while (hash[0] > 0 && hash[1] > 0 && hash[2] > 0) {
      ans += n - j;
      hash[s.charCodeAt(i) - "a".charCodeAt(0)]--;
      i++;
    }
    j++;
  }
  return ans;
};
