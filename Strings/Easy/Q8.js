// Roman to Integer

function romanToInt(s) {
  let map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let n = s.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    let current = map[s[i]];
    let next = map[s[i + 1]] || 0;
    if (current < next) {
      total -= current;
    } else {
      total += current;
    }
  }
  return total;
}
console.log(romanToInt("MCMXCIV"));
