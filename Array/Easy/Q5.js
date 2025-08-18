// Left Rotate an Array by One
// function leftRotate(arr) {
//     let n= arr.length
//     let temp = arr[0];
//     for(let i=1;i<n;i++){
//         arr[i-1] = arr[i];

//     }
//     arr[n-1]=temp;
//     return arr;
    
// }
// console.log(leftRotate([1,2,3,4,5]));


// Left rotate by k places

// Brute force
// function leftRotate(arr, k) {
//     let n = arr.length;
//     k=k%n;
//     let temp=arr.slice(0,k);
    
//     for(let i=k;i<n;i++){
//         arr[i-k]=arr[i];
//     }
//     for(let i=n-k;i<n;i++){
//         arr[i]=temp[i-(n-k)]
//     }
//     return arr;
// }
// console.log(leftRotate([1,2,3,4,5,6,7,8],18));


//Optimal solution
// function leftRotate(arr, k) {
//     let n = arr.length;
//     k=k%n;
//     reverse(arr,0,k-1);
//     reverse(arr,k,n-1);
//     reverse(arr,0,n-1);
//     return arr;
// }
// function reverse(arr, start, end) {
//     while(start<end){
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;
//         start++;
//         end--;
//     }
// }
// console.log(leftRotate([1,2,3,4,5,6,7,8
//     ],3));





