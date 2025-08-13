//Find the second Largest Number in the array

//Brute force
// function secondLargest(arr) {
//     let sortArr =arr.sort((a,b)=>a-b);
//     let n=sortArr.length
//     let largest=sortArr[n-1];
//     let sLargest=-1
//  for(let i=n-2;i>=0;i--){
// if(sortArr[i]!=largest){
//     sLargest=sortArr[i]
//     break;
// }
//  }
//  return sLargest
// }

//Better
// function secondLargest(arr) {
//    let largest=arr[0];
//    for(let i=1;i<n;i++){
//     if(arr[i]>largest){
//         largest=arr[i]
//     }
//    }
//    let sLargest=-Infinity;
//    for(let i=0;i<n;i++){
//     if(arr[i]>sLargest && arr[i]!=largest){
//         sLargest=arr[i];
//     }
//    }
//    return sLargest===-Infinity?-1:sLargest;
// }





//Optimal
// function secondLargest(arr,n) {
//     let largest=arr[0];
//     let sLargest=-Infinity;
//     for(let i=1;i<n;i++){
//         if(arr[i]>largest){
//             sLargest=largest;
//             largest=arr[i];
//         }else if(arr[i]<largest && arr[i]>sLargest){
//             sLargest=arr[i];
//         }
//     }
//     return sLargest===-Infinity?-1:sLargest;
    
// }
// let arr=[1,2,4,7,7,5 ]
// let n = arr.length;
// console.log(secondLargest(arr,n));




//find Second largest and second smallest number in the array


function sSmallestSlargest(arr,n) {
    let largest=arr[0];
    let smallest=arr[0];
    let sLargest=-Infinity;
    let sSmallest=Infinity;
    for(let i=1;i<n;i++){
        if(arr[i]>largest){
            sLargest=largest;
            largest=arr[i];
        }else if(arr[i]<largest&&arr[i]>sLargest){
            sLargest=arr[i];
        }
        if(arr[i]<smallest){
            sSmallest=smallest;
            smallest=arr[i];
        }else if(arr[i]>smallest&&arr[i]<sSmallest){
            sSmallest=arr[i];
        }
    }
    return{
        
        sLargest:sLargest===-Infinity?-1:sLargest,
        sSmallest:sSmallest===Infinity?-1:sSmallest
    }
    
}
let arr = [100, -50, 200, 200, -300, 0, 99, -1, 150, 150, -50];
let n = arr.length;
console.log(sSmallestSlargest(arr,n));