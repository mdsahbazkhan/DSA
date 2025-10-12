// Sort Characters By Frequency

function frequencySort(str) {
  let freq = {};
  for (const s of str) {
    freq[s] = (freq[s] || 0) + 1;
  }
  let freqArray = Object.entries(freq).sort((a, b) => b[1] - a[1]);

  let result = "";
  for (let [char, value] of freqArray) {
    result += char.repeat(value);
  }
  return result;
}
console.log(frequencySort("tree"));
