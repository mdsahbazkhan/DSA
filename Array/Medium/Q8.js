// Matrix setZeros

// Brute Force
// function setZeros(matrix) {
  // let row = matrix.length;
  // let col = matrix[0].length;
//   for (let i = 0; i < row; i++) {
//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] == 0) {
//         markRow(i);
//         markCol(j);
//       }
//     }
//   }
//   function markRow(i) {
//     for (let j = 0; j < col; j++) {
//       if (matrix[i][j] != 0) {
//         matrix[i][j] = -1;
//       }
//     }
//   }

//   function markCol(j) {
//     for (let i= 0; i < row; i++) {
//       if (matrix[i][j] != 0) {
//         matrix[i][j] = -1;
//       }
//     }
//   }
//   for(let i=0;i<row;i++){
//     for(let j=0;j<col;j++){
//         if(matrix[i][j]==-1){
//             matrix[i][j]=0
//         }
//     }
//   }
//   return matrix;
// }
// console.log(
//   setZeros([
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 1, 0, 1],
//     [1, 0, 0, 1],
//   ])
// );

//Better

// function setZeros(matrix) {
// let row = matrix.length;
//   let col = matrix[0].length;
// let hashRow = new Array(row).fill(0);
// let hashCol=new Array(col).fill(0);
// for(let i=0;i<row;i++){
//   for(let j=0;j<col;j++){
//     if(matrix[i][j]==0){
//       hashRow[i]=1;
//       hashCol[j]=1;

//     }
//   }
// }
// for(let i=0;i<row;i++){
//   for(let j=0;j<col;j++){
// if(hashCol[j]||hashRow[i]){
//   matrix[i][j]=0
// }
//   }
// }
    
//     return matrix;
// }
// console.log(
//   setZeros([
//     [1, 1, 1, 1],
//     [1, 0, 1, 1],
//     [1, 1, 0, 1],
//     [1, 0, 0, 1],
//   ])
// );

function setZeros(matrix) {
let row = matrix.length;
  let col = matrix[0].length;
let col0=1
for(let i=0;i<row;i++){
  for(let j=0;j<col;j++){
    if(matrix[i][j]==0){
      matrix[i][0]=0;
      if(j!=0){
        matrix[0][j]=0
      }else{
col0=0
      }

    }
  }
}
for(let i=1;i<row;i++){
  for(let j=1;j<col;j++){
if(matrix[i][j]!=0){
  matrix[i][j]=0
}
  }
}
if(matrix[0][0]==0){
  for(let j=0;j<col;j++){
    matrix[0][j]=0
  }
}
if(col0==0){
  for(let i=0;i<row;i++){
    matrix[i][0]=0
  }
}
    
    return matrix;
}
console.log(
  setZeros([
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 0, 1],
    [0, 1, 1, 1],
  ])
);