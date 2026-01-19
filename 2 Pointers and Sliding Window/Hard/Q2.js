// Minimum Window Substring 
function minWindow(s, t) {
  let minLength = Infinity;
  let startIndex = -1;

  for (let i = 0; i < s.length; i++) {
    let hash = new Array(256).fill(0);
    let cnt = 0;

    // fill frequency of t
    for (let ch of t) {
      hash[ch.charCodeAt(0)]++;
    }

    for (let j = i; j < s.length; j++) {
      let idx = s[j].charCodeAt(0);

      if (hash[idx] > 0) cnt++;
      hash[idx]--;

      if (cnt === t.length) {
        if (j - i + 1 < minLength) {
          minLength = j - i + 1;
          startIndex = i;
        }
        break; // smallest from this i
      }
    }
  }

  return startIndex === -1
    ? ""
    : s.substring(startIndex, startIndex + minLength);
}

console.log(minWindow("ADOBECODEBANC", "ABC"));
//Optimal 

var minWindow = function(s, t) {
    let n= s.length;
    let m= t.length;
    let l=0;
    let r=0;
    let hash=new Array(256).fill(0);
    let minLength=Infinity;
    let sIndex=-1;
    let cnt=0;
    for(let i=0;i<m;i++){
        hash[t[i].charCodeAt(0)]++
    }
    while(r<n){
        if(hash[s[r].charCodeAt(0)]>0)cnt++;
        hash[s[r].charCodeAt(0)]--;
        while(cnt===m){
            if(r-l+1<minLength){
                minLength=r-l+1;
                sIndex=l
            }
              hash[s[l].charCodeAt(0)]++;
              if(hash[s[l].charCodeAt(0)]>0)cnt--;
              l++

        }
        r++
    }
    return  sIndex === -1
    ? ""
    : s.substring(sIndex, sIndex + minLength);
    
};