//Missing number in the array

//Brute Force
// function missingNo(arr,N) {
//     for(let i=1;i<N;i++){
//         let flag=0;
//         for(let j=0;j<N-1;j++){
//             if(arr[j]==i){
//                 flag=1;
//                 break;
//             }
//         }
//         if(flag==0)return i;
       
//     }
//     return -1
    
// }
// console.log(missingNo([1,2,3,4,5],5));

// Better
// function missingNo(arr) {
//    let n=arr.length;
//    let hash=new Array(n+1).fill(0);
//    for(let i=0;i<n;i++){
//    hash[ arr[i]]=1
//    }
//    for(let i=1;i<hash.length;i++){
//     if(hash[i]==0){
//         return i;
//     }
//    }
//    return -1;
    
// }
// console.log(missingNo([1,2,3,4,5,7]));

//Optimal using sum
// function missingNo(arr,N) {
//     const sum=N*(N+1)/2
//     let sum2=0;
//     for(let i=0;i<arr.length;i++){
//         sum2+=arr[i];
//     }
//     return sum-sum2;
       
// }
// console.log(missingNo([1,2,3,4,5,7],7));


//Optimal using XOR

// function missingNo(arr,N) {
//    let XOR1=0;
//    for(let i=1;i<=N;i++){
//     XOR1=XOR1^i;
//    }
//    let XOR2=0;
//    for(let i=0;i<N-1;i++){
//     XOR2=XOR2^arr[i];
//    }
//    return XOR1^XOR2
       
// }
// console.log(missingNo([1,2,3,4,5,7],7));

// (OR)
// function missingNo(arr,N) {
//    let XOR1=0;
//    let XOR2=0;
//    for(let i=0;i<N-1;i++){
//     XOR2=XOR2^arr[i];
//     XOR1=XOR1^(i+1)
//    }
//    XOR1=XOR1^N;
//    return XOR1^XOR2
       
// }
// console.log(missingNo([1,2,3,4,6,7],7));

var missingNumber = function(nums) {
    let n = nums.length;
    let xor = n;
    for (let i = 0; i < n; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
};
console.log(missingNo([1,2,3,5]));


