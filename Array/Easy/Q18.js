// Leaders in an Array problem

//Brute Force

// function leaderArr(arr){
//     let result=[];
//     let n= arr.length;
//     for(let i=0;i<n;i++){
//         let leader =true;

//         for(let j=i+1;j<n;j++){
//             if(arr[j]>arr[i]){
//                 leader=false;
//                 break;
//             }
//         }
//         if(leader==true){
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(leaderArr([10,22,12,3,0,6]));

//Optimal
function leaderArr(arr){
    let result=[];
    let n= arr.length;
    let max=-Infinity;
   for(let i=n-1;i>=0;i--){
    if(arr[i]>=max){
        result.push(arr[i])
        max=arr[i]
    }
   
   }
 
    return result.reverse()
}
console.log(leaderArr([61,61,17]));

