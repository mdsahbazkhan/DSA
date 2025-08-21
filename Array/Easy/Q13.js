// Find the number that appears once, and other numbers twice

//Brute force

// function singleNumber(arr,N) {
//     for(let i=0;i<N;i++){
//         let counter =0;
//         let num= arr[i];
//         for(let j=0;j<N;j++){
            
            
//             if(arr[j]==num){
//                 counter++;
//             }
           
//         }
//         if(counter==1) return num
//     }
// }
// const arr=[1,1,2,2,3,4,4]
// console.log(singleNumber(arr,arr.length));

//Better

// function singleNumber(arr,N) {
//    let freq = new Map()
//     for(let i=0;i<N;i++){
//        freq.set(arr[i],(freq.get(arr[i])||0)+1)
//        console.log(freq);
       
//     }
//   for (const [key ,value] of freq) {
//     if(value==1)return key
//   }


// }
// const arr=[1,1,2,3,3,4,4]
// console.log(singleNumber(arr,arr.length));

// Optimal

// function singleNumber(arr,N) {
//   let xor=0;
//   for(let i=0;i<N;i++){
//     xor^=arr[i]
//   }
//   return xor


// }
// const arr=[1,1,2,3,3,4,4]
// console.log(singleNumber(arr,arr.length));



