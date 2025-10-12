// Kadane's Algorithm, maximum subarray sum

//Brute

// function subArrSum(arr) {
//     let n= arr.length;
//     let max= -Infinity;
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let sum=0;
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k];
//                 max=Math.max(sum,max)
//             }
//         }
//     }
//     return max;
    
// }
// console.log(subArrSum([-2,-3,4,-1,-2,1,5,-3]));

// Better

// function subArrSum(arr) {
//     let n= arr.length;
//     let max= -Infinity;
//     for(let i=0;i<n;i++){
//         let sum=0;
//         for(let j=i;j<n;j++){
//                 sum+=arr[j];
//                 max=Math.max(sum,max)
            
//         }
//     }
//     return max;
    
// }
// console.log(subArrSum([-2,-3,4,-1,-2,1,5,-3]));

//Optimal



function subArrSum(arr) {
    let n= arr.length;
    let max= -Infinity;
   let sum=0;
   for(let i=0;i<n;i++){
    sum+=arr[i];
    if(sum>max){
        max=sum;
    }
    if(sum<0){
        sum=0;
    }
   }
   return max
    
}
console.log(subArrSum([-2,-3,4,-1,-2,1,5,-3]));


// function subArrSum(arr) {
//     let n= arr.length;
//     let max= -Infinity;
//    let sum=0;
//    let start=0,end=0,tempStart=0;
//    for(let i=0;i<n;i++){
//     sum+=arr[i];
//     if(sum>max){
//         max=sum;
//         start=tempStart;
//         end=i
//     }
//     if(sum<0){
//         sum=0;
//         tempStart=i+1
//     }
//    }
//    return {max,subarr:arr.slice(start,end+1)}
    
// }
// console.log(subArrSum([-2,-3,4,-1,-2,1,5,-3]));
