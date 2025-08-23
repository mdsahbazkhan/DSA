// 2Sum problem

// Brute Force
// function sumProblem(arr,Target){
//     let n= arr.length;
//     for (let i = 0; i <n; i++) {
//         for(let j=i+1;j<n;j++){
//             if(arr[i]+arr[j]==Target){
//                 return {i,j};
//             }
//         }
        
//     }


// }
// const arr=[2,6,5,8,11]
// console.log(sumProblem(arr,14));

//Better


// function sumProblem(arr,Target){
//     let n= arr.length;
//     let hash=new Map()
//     for (let i = 0; i <n; i++) {
//         let a=arr[i];
//         let more=Target-a;
//         if(hash.has(more)){
//             return [hash.get(more),i]
//         }
//         hash.set(a,i)
        
//     }

// return []
// }
// const arr=[2,6,5,8,11]
// console.log(sumProblem(arr,14));

// Optimal
function sumProblem(arr,Target){
    let n= arr.length;
    arr=arr.sort((a,b)=>a-b)
   let i=0;
   let j=n-1;
   while(i<j){
    let sum=arr[i]+arr[j];
    if(sum==Target)return [i,j];
    else if(sum<Target)i++;
    else j--;
   }

return []
}
const arr=[3,2,4]
console.log(sumProblem(arr,6));
