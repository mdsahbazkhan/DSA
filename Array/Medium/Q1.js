//Right rotate by k places
function RightRotate(arr,k) {
let n = arr.length;
k=k%n;
let temp=arr.slice(n-k,n)
console.log(temp);

for(let i=n-k-1;i>=0;i--){
    arr[i+k]=arr[i];
}
for (let i = 0; i < k; i++) {
   arr[i] = temp[i];
    
}
return arr;
    
}
console.log(RightRotate([1,2,3,4,5,6], 2));






// function RightRotate(arr,k) {
//     let n = arr.length;
//     k = k % n;
//     reverse(arr, 0, n - 1);
//     reverse(arr,0,k-1);
//     reverse(arr,k,n-1);
//     return arr;
    
// }
// function reverse(arr,low,high){
//     while(low<high){
//         let temp = arr[low];
//         arr[low] = arr[high];
//         arr[high] = temp;
//         low++;
//         high--;
//     }

// }
// console.log(RightRotate([1,2,3,4,5,6,7
//     ],3));