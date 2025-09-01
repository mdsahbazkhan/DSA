// Longest Consecutive sequence

// Brute Force

// function longConsecutive(arr) {
//     let n= arr.length;
//     let longest = 1;
//     for(let i=0;i<n;i++){
//         let x= arr[i];
//         let count=1;
//         while(ls(arr,x+1)==true){
//             x=x+1;
//             count+=1;
//         }
//         longest=Math.max(longest,count)
//     }
//     return longest;
    
// }
// console.log(longConsecutive([102,4,100,1,101,3,2,1,1,5,103,104,105,106]));

// function ls(arr,num) {
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==num){
//             return true;
//         }
//     }
//     return false
    
// }

//Better

// function longConsecutive(arr) {
//     arr.sort((a,b)=>a-b)
//     let n= arr.length;
//     let lastSmaller=-Infinity;
//     let count=0;
//     let longest=1;
//     for(let i=0;i<n;i++){
//         if(arr[i]-1==lastSmaller){
//             count+=1;
//             lastSmaller=arr[i];
//         }else if(arr[i]!=lastSmaller){
//             count=1;
//             lastSmaller=arr[i];
//         }
//     }
//     longest =Math.max(longest,count);
//     return longest;
    
// }
// console.log(longConsecutive([102,4,100,1,101,3,2,1,1,5,103,104,105,106]));


// function longConsecutive(arr) {
//   let n= arr.length;
//   if(n==0)return 0;

//   let longest=1;
//   let st=new Set();
//   for(let i=0;i<n;i++){
// st.add(arr[i])
//   }
//   for(let num of st){
//     if(!st.has(num-1)){
//         let count=1;
//         let currentNum=num
//         while(st.has(currentNum+1)){
//             currentNum++;
//             count++;
//         }
//         longest=Math.max(longest,count)
//     }
//   }
//   return longest
    
// }
// console.log(longConsecutive([102,4,100,1,101,3,2,1,1,5,103,104,105,106]));

