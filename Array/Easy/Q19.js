// Pascal's Triangle

// Q) Given Row and Col find the element that place

// function nCr(r,c){
//     let res=1
//     for(let i=0;i<c;i++){
// res= res*(r-i)
// res=res/(i+1)
//     }
//     return res
// }
// console.log(nCr(4,3));


// Print any Nth row of Pascal's triangle

// function printNRow(r){
//     for(let i=1;i<=r;i++){
//         console.log(nCr(r-1,i-1)); 
//     }
// }
// printNRow(5)

// (OR)
// function printNRow(r){
//     let res=1
//     console.log(res);
    
//     for(let i=1;i<r;i++){
//         res= res*(r-i);
//         res=res/i
//         console.log(res);
        
//     }
    
// }
// printNRow(7)




// Given N print the entire triangle
// function generateRow(row){
//     let res=1
//     let resRow=[];
//     resRow.push(res);
//     for(let i=1;i<row;i++){
//         res=res*(row-i);
//         res=res/i;
//         resRow.push(res)
//     }
//     return resRow
// }
// function PascalTria(N){
//     let ans=[];
//     for(let i=1;i<=N;i++){
//         ans.push(generateRow(i))
//     }
//     return ans
// }
// console.log(PascalTria(5));




