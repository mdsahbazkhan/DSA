// move all zeroes to the front of the array
// function movesZerofront(arr) {
//     let n = arr.length;
//     let result = [];
//     for(let i=0;i<n;i++){
//         if(arr[i] == 0){
//             result.push(arr[i]);
//         }
//     }
//     for(let i=0;i<n;i++){
//         if(arr[i] != 0){
//             result.push(arr[i]);
//             }
//     }
//     for(let i=0;i<result.length;i++){
//         arr[i] = result[i];
//     }
//     return arr;
    
// }
// console.log(movesZerofront([1,0,3,0,4]));

// function movesZerofront(arr) {
//     let n = arr.length;
//     let j=n-1;
//     for(let i=n-1;i>=0;i--){
//         if(arr[i]!=0){
//             [arr[i],arr[j]]=[arr[j],arr[i]];
//             j--;
//         }
//     }
//     return arr;
    
// }
// console.log(movesZerofront([1,0,3,0,4]));

// function movesZerofront(arr) {
//     let n=arr.length;
//     let j=n-1;
//     for(let i=n-1;i>=0;i--){
//         if(arr[i]!=0){
//             arr[j]=arr[i];
//             j--;        
//         }
//     }
//     for(let i=j;i>=0;i--){
//         arr[i]=0;
//     }
    
//     return arr;
// }
// console.log(movesZerofront([1,0,3,0,4]));


function currentsal(basic,grade) {
    let hra =(20/100)*basic;
    let da=(50/100)*basic;
    let pf=(11/100)*basic;
    let allowance =0;
    if(grade=='A'){
        allowance=1700;
    }else if(grade =='B'){
        allowance=1500;
    }else{
        allowance=1300;
    }
    let totalSalary = basic +hra+da+allowance-pf;
    return totalSalary;
    
}
console.log(currentsal(10000,'A'));