// function insertionSort(arr){
//   let n=arr.length
//   for(let i=0;i<n;i++){
//     let j=i;
//     while(j>0&& arr[j-1]>arr[j]){
//       let temp =arr[j];
//       arr[j]=arr[j-1];
//       arr[j-1]=temp;
//       j--;
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([4,2,1,3]))

// function insertionSort(arr){
//   let n=arr.length
//   for(let i=0;i<n;i++){
//     for(let j=i;j>0;j--){
//       if(arr[j]<arr[j-1]){
//         let temp = arr[j];
//         arr[j] = arr[j-1];
//         arr[j-1] = temp;
//       }
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([64,25,-12,23,11]))



//Recursive insertionSort 

function insertionRecursive(arr,n) {
  if(n<=1) return ;
  insertionRecursive(arr,n-1);
  let last =arr[n-1];
    let j=n-2;
    while(j>=0&& arr[j]>last){
arr[j+1]=arr[j];
j--;
    }
    arr[j+1]=last;
}
let arr=[64,25,-12,23,11]
insertionRecursive(arr,arr.length);
console.log(arr);