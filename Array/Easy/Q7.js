// Move Zeros to end

//Brute force
// function moveszeros(arr) {
//     let n= arr.length;
//     let temp =[];
//     for(let i=0; i<n; i++) {
//         if(arr[i]!=0){
//             temp.push(arr[i]);
//         }
//     }
//     for(let i=0;i<temp.length;i++){
//         arr[i]=temp[i];
//     }
//     let nz=temp.length;
//     for(let i=nz;i<n;i++){
//         arr[i]=0;
//     }
//     return arr;
    
// }
// console.log(moveszeros([1,0,2,3,2,0,0,4,5,1]));


// Optimal
function moveszeros(arr) {
let n = arr.length;
let j=-1;
for(let i=0; i<n; i++) {
    if(arr[i]==0){
        j=i;
        break;
    }
}
 if (j === -1) return arr;
for(let i=j+1;i<n;i++){
    if(arr[i]!=0){
        [arr[i],arr[j]]= [arr[j],arr[i]]
        j++;
    }
}
return arr;
}
console.log(moveszeros([1]));

