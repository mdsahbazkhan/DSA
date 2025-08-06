// class Solution {
//     countDigit(n) {
// let counter =0;
// while(n>0){
//     let lastNo = n%10;
//     counter = counter+1;
//     n=Math.floor(n/10);
// }
// return(counter)
//     }
// }
// const obj = new Solution();
// console.log(obj.countDigit(12345)); 


// concentric pattern


// function pattern(n){
//     for(let i=0;i<2*n-1;i++){
//         let row = '';
//         for(let j=0;j<2*n-1;j++){
//             let top =i;
//             let left =j;
//             let bottom =(2*n-2)-i;
//             let right = (2*n-2)-j;

//             let min =Math.min(Math.min(top,bottom),Math.min(left,right))
//             row+=n-min;
//         }
//         console.log(row);
//     }
// }
// pattern(6)


// function GCD(a,b){
//     while(a>0 && b>0){
//         if(a>b){
//             a = a%b;
//         }else{
//             b = b%a;
//         }
//     }
//     return a===0?b:a;
// }
// console.log(GCD(12,8))



// function highLowFreq(nums){
// let n=nums.length;
// let smallest =Infinity;
// let numwithmin =-1;
// let numwithmax =-1;
// let largest=-Infinity;
// let hash=new Array(101).fill(0);
// for(let i=0;i<n;i++){
//     hash[nums[i]]+=1;
// }
// for(let i=0;i<hash.length;i++){
//     if(hash[i]>0){
//  if(hash[i]<smallest){
//         smallest=hash[i];
//         numwithmin=i;
//     }
//     if(hash[i]>largest){
//         largest=hash[i];
//         numwithmax=i;
//     }
//     }
   
// }
// return[ numwithmin,numwithmax].join(",")
// }

// console.log(highLowFreq([10,5,10,15,10,5]))



// function highLowFreq(nums){
//     let freqMap = new Map();
//     for(let num of nums){
//         freqMap.set(num,(freqMap.get(num)||0)+1);
    
//     }
//     let minfrq =Infinity;
//     let maxfrq =-Infinity;
//     let minnum =-1;
//     let maxnum =-1;

//     for(let [num,freq] of freqMap){
//         if(freq<minfrq){
//             minfrq=freq;
//             minnum=num;
//         }
//         if(freq>maxfrq){
//             maxfrq=freq;
//             maxnum=num;
//         }
//     }
//     return [minnum,maxnum].join(",");
    
// }
// console.log(highLowFreq([10,5,10,15,10,5]))

// function highLowFreq(nums){
//     let freq={};
//     for(let num of nums){
//         freq[num]=(freq[num]||0)+1
//     }
//     let minfrq =Infinity;
//     let maxfrq =-Infinity;
//     let minnum =-1;
//     let maxnum =-1;
//     for(let key in freq){
//         if(freq[key]<minfrq){
//             minfrq=freq[key];
//             minnum=Number(key);
//         }
//         if(freq[key]>maxfrq){
//             maxfrq=freq[key];
//             maxnum=Number(key);
//             }
//     }
//     return [minnum,maxnum].join(",");
    
// }
// console.log(highLowFreq([10,5,10,15,10,5]))


function ReverseArr(i,arr){
    let n=arr.length;
    if(i>=n/2){
        return arr;
    }
    let temp=arr[i];
    arr[i]=arr[n-1-i];
    arr[n-1-i]=temp;
    return ReverseArr(i+1,arr);
}
console.log(ReverseArr(0,[1,2,3,4,5]));
