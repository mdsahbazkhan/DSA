
// let n=7;
// let arr=[1,2,4,6,3,1,4];

// let hash = new Array(15).fill(0)

// for(let i =0;i<n;i++){
//     hash[arr[i]] +=1
// }

// let queries = [2,1,6,2,0,1,4];
// let q = queries.length;

// for(let i =0;i<q;i++){
//     let num = queries[i];
//     console.log(hash[num])

// }


// class Solution {
//     countFrequencies(nums) {
//      let n=nums.length;
//      let hash= new Array(14).fill(0);
//      for(let i=0;i<n;i++){
//         hash[nums[i]]+=1;
//      }
     
//      let result=[];
//      for(let i=0;i<hash.length;i++){
//         if(hash[i]>0){
//             result.push([i,hash[i]])
//         }
//      }
//      return result;

//     }
// }
// const obj = new Solution();
// let nums = [1, 2, 2, 1, 3];
// console.log(obj.countFrequencies(nums)); 

// class Solution {
//     countFrequencies(string) {
//     let n=string.length;
    
//     let hash = new Array(26).fill(0);
//     for(let i=0;i<n;i++){
//         hash[string.charCodeAt(i)-'a'.charCodeAt(0)]++;
//     }
//     console.log(hash); 
//     for(let i=0;i<hash.length;i++){
//         if(hash[i]>0){
//         console.log(hash[i])}
//     }

//     }
// }
// const obj = new Solution();
// let string = 'abcdabehf';
// obj.countFrequencies(string)


// function countFrequencies(str,q,queries){
//     let hash = new Array(26).fill(0);
//     for(let i=0;i<str.length;i++){
//        let index= str.charCodeAt(i)-'a'.charCodeAt(0);
//        hash[index]++;
//     }
//     for(let i=0;i<q;i++){
//        let char =queries[i];
//        let index = char.charCodeAt(0)-'a'.charCodeAt(0);
//        console.log(hash[index]);
//     }
//     return '';

// }
// console.log(countFrequencies('abcdabehf',5,['a','g','h','b','c']));



// function maxFrequencyElements(nums){
//     let n=nums.length;
//     let hash = new Array(101).fill(0);
//     let max = 0;
//     let total =0;
//     for(let i=0;i<n;i++){
//        hash[nums[i]]++;
//        max=Math.max(max,hash[nums[i]])
       
//     }   
//     for(let i=0;i<hash.length;i++){
// if(hash[i]===max){
// total+=hash[i];
// }
          
//     }
//     return total;
// }
// const nums = [ 1,2,3,4,5]
// console.log(maxFrequencyElements(nums));
// maxFrequencyElements(nums)


// function smallestLargestFreq(arr){
//     let n=arr.length;
//     let hash = new Array(101).fill(0);
//     for(let i=0;i<n;i++){
//         hash[arr[i]]++
//     }
//     let largest=-Infinity ;
//     let smallest = Infinity;
//     let samfreq=-1;
//     let larfreq=-1;
//     for(let i=0;i<hash.length;i++){
//         if(hash[i]>0){
//             if(hash[i]>largest){
//                 largest=hash[i];
//                 larfreq=i;
//             }
//             if(hash[i]<smallest){
//                 smallest=hash[i];
//                 samfreq=i;
//             }
//         }
//     }
//     return [samfreq,larfreq].join(" ")

// }

// function smallestLargestFreq(arr) {
//     let freqMap = new Map();
//     for (let num of arr) {
//         console.log(freqMap);
        
//         freqMap.set(num,(freqMap.get(num)||0)+1);
        
//     } 
    // let smallest = Infinity;;
    // let largest = -Infinity;
    // let smallestFreq = -1;
    // let largestFreq = -1;
//     for(let [num,freq]of freqMap){
//         if(freq>largest){
//             largest=freq;
//             largestFreq=num;
//         }
//         if(freq<smallest){
//             smallest=freq;
//             smallestFreq=num;
//         }
//     }
//     return [smallestFreq, largestFreq].join(" ");
    
// }

function smallestLargestFreq(arr) {
    let freqMap = {};
    for(let num of arr){
        
        freqMap[num]=(freqMap[num]||0)+1
    }
        let smallest = Infinity;;
    let largest = -Infinity;
    let smallestFreq = -1;
    let largestFreq = -1;
    for(let num in freqMap){        
        if(freqMap[num]>largest){
            largest=freqMap[num];
            largestFreq=num;
        }
        if(freqMap[num]<smallest){
            smallest=freqMap[num];
            smallestFreq=num;
        }
    }
    return [smallestFreq, largestFreq].join(" ");

}

console.log(smallestLargestFreq([1, 1, 2, 2, 2, 3]));

