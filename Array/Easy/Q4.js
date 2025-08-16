//Remove duplicate elements and return length of array

//Brute force

// function removeDuplicate(arr,n) {
//     let st = new Set();
//     for(let i=0;i<n;i++) {
//         st.add(arr[i]);
//     }   
//     let index=0
//     for (let  value of st) {
//         arr[index]=value;
//         index++;    
//     }
//     return index;
// }
// let arr=[1,2,2,3,3,4,5,6,6]
// console.log(removeDuplicate(arr,arr.length))

// or

// function removeDuplicate(arr) {
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(j,1);
//                 j--;
//             }
//         }
//     }
//     return arr.length;
// }
// let arr=[1,2,2,3,3,4,5,6,6]
// console.log(removeDuplicate(arr))

// Optimal
// function removeDuplicate(arr) {
//     let i=0;
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]!=arr[j]){
//             arr[i+1]=arr[j];
//             i++;
//         }
//     }
//     return i+1;
// }
// let arr=[1,2,2,3,3,4,5,6,6]
// console.log(removeDuplicate(arr))




// function removeElement(arr,val) {
//   let index=0
//  for(let i=0;i<arr.length;i++){
//     if(arr[i]!=val){
// arr[index]=arr[i]
// index++;
//     }
//  }
//   arr.length=index;
//   return arr

    
// }
// // let arr=[3,2,2,3];
// // console.log(removeElement(arr,3));


var removeElement = function(nums, val) {
    let index=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[index]=nums[i];
            index++
        }

    }
     return index; 
};

let arr=[3,2,2,3];
console.log(removeElement(arr,3));