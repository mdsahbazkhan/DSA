// function bubbleSort(arr){
//     let n = arr.length;
//     for (let i = 0; i < n-1; i++) {
//         for (let j = 0; j < n - i - 1; j++){
//             if (arr[j] > arr[j+1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(bubbleSort([13,46,24,52,20,9]));


function bubblerecursion(arr,n) {
if(n==1)return arr;
let swapped=false;
for (let i = 0; i <n-1; i++) {
    if(arr[i]>arr[i+1]){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        swapped=true;
    }   
}
 if (swapped) {
        return bubblerecursion(arr, n - 1);
    } else {
        return arr; 
    } 
}
let arr=[13,46,24,52,20,9]
let n=arr.length
console.log(bubblerecursion(arr,n))
