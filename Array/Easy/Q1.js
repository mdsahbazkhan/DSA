//Find the largest element in an array(Brute Force Approach)

// function findLargest(arr) {
//     let sort=arr.sort((a,b)=>a-b)
//     return sort[sort.length-1];
// }
// console.log(findLargest([3,2,1,5,2]));



//Find the largest element in an array(Optimal Approach)

function findLargest(arr) {
 let largest = arr[0];
 for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
        largest=arr[i];
    }
 }   
 return largest;
}
console.log(findLargest([3,2,1,5,2]));