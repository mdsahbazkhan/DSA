// Longest SubArray with sum k

//Brute force 
// function subArray(arr,k){
//     let n= arr.length
//     let maxlength=0;
//     for(i=0;i<n;i++){
//         let sum=0;
//         for(let j=i;j<n;j++){              
//                 sum+=arr[j];
//             if(sum==k){
//                 maxlength=Math.max(maxlength,j-i+1)
//             }
//         }
//     }
//     return maxlength
// }
// console.log(subArray([1,2,3,1,1], 6));

function subArray(arr,k){
    let map=new Map()
    let n= arr.length;
    let sum=0;
    let maxlength=0;
    for(let i=0;i<n;i++){
        sum+=arr[i];
        if(sum==k){
            maxlength=Math.max(maxlength,i+1);
        }
        if(map.has(sum-k)){
            maxlength= Math.max(maxlength,i-map.get(sum-k))
        }
        if(map.has(sum)){
            
            map.set(sum,i)
            
        }
        
    }
     
    
    return maxlength
   
}
console.log(subArray([1,2,3,1,1,1,1,4,2,3], 6));
