// Sum of Beauty of All Substrings

function beautySum(str) {
  let n = str.length;
  let total = 0;
  for (let i = 0; i < n; i++) {
    let freq = new Array(26).fill(0);
    for (let j = i; j < n; j++) {
      let idx = str.charCodeAt(j) - 97;
      freq[idx]++;
      let maxfreq = 0;
      let minfreq = Infinity;
      for (let f of freq) {
        if (f > 0) {
          maxfreq = Math.max(maxfreq, f);
          minfreq = Math.min(minfreq, f);
        }
      }
      total += maxfreq - minfreq;
    }
  }
  return total;
}
console.log(beautySum("aabcb"));
