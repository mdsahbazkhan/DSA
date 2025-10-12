// Longest SubArray with sum k

//Brute force 
// function subArray(arr,k){
//     let n= arr.length;
//     let maxLength=0;
//     for(let i=0;i<n;i++){
//         let sum=0;
//         for(let j=i;j<n;j++){
//             sum+=arr[j];
//             if(sum==k){
//                 maxLength=Math.max(maxLength,j-i+1);
//             }
//         }
//     }
//     return maxLength;
// };
// console.log(subArray([1,2,3,1,1,1,1,4,2,3],3));

//Better

// function subArray(arr,k){
//     let n= arr.length;
//     let hash= new Map();
//     let maxLength=0;
//     let prefixSum=0;
//     for(let i=0;i<n;i++){
//         prefixSum+=arr[i];
//         if(prefixSum==k){
//             maxLength= Math.max(maxLength,i+1);
//         }
//         if(hash.has(prefixSum-k)){
//             maxLength=Math.max(maxLength,i-(hash.get(prefixSum-k)));
//         }
//         if(!hash.has(prefixSum)){
//             hash.set(prefixSum,i)
//         }
//     }
//     return maxLength;
// };
// console.log(subArray([2,0,0,3],3));

// Optimal
 function subArray(arr,k){
    let n= arr.length;
    let sum=arr[0];
    let left=0;
    let right=0;
    let maxLength=0
    while(right<n){
        while(left<=right && sum>k){
            sum-=arr[left];
            left++;
        }
        if(sum==k){
            maxLength=Math.max(maxLength,right-left+1);
        }
        right++;
        if(right<n){
            sum+=arr[right]
        }
    }


    return maxLength;
};
console.log(subArray([1,2,1,2,1],3));
