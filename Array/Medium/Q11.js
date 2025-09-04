// Count subarrays with given sum

// function subarraySum(arr,l){
//     let n= arr.length;
//     let count=0;
//     for(let i=0;i<n;i++){
//         for(let j=i;j<n;j++){
//             let sum=0;
//             for(let k=i;k<=j;k++){
//                 sum+=arr[k];
//             }
//             if(sum==l)count++
//         }
//     }
//     return count

// }
// console.log(subarraySum([1,2,3,-3,1,1,1,4,2,-3],3));

// function subarraySum(arr,l){
//     let n= arr.length;
//     let count=0;
//     for(let i=0;i<n;i++){
//         let sum=0;
//         for(let j=i;j<n;j++){
//                 sum+=arr[j];
//                 if(sum==l)count++
//             }
//     }
//     return count

// }
// console.log(subarraySum([1,2,3,-3,1,1,1,4,2,-3],3));

function subarraySum(arr,l){
    let n= arr.length;
    let count=0;
    let sum=0
    let hashMap=new Map()
    hashMap.set(0,1);
    for(let i=0;i<n;i++){
sum+=arr[i];
if(hashMap.has(sum-l)){
    count+=hashMap.get(sum-l)
}
hashMap.set(sum,(hashMap.get(sum)||0)+1)
    }
    return count

}
console.log(subarraySum([1,-1,0],0));



