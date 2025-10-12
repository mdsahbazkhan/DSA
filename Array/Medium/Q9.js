// Rotate matrix by 90 degree


//Brute Force 
// function rotateMatrix(matrix) {
//     let n=matrix.length;
//     let result=Array.from({length:n},()=>Array(n).fill(0));
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             result[j][n-i-1]=matrix[i][j]
//         }
//     }
//     return result;
    
// }
// console.log(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

// function rotateMatrix(matrix) {
//     let n=matrix.length;
//      for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             // [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]]
//             let temp=matrix[i][j];
//             matrix[i][j]=matrix[j][i];
//             matrix[j][i]=temp
//         }
//      }
//     //  for(let i=0;i<n;i++){
//     //     matrix[i].reverse();
//     //  }

//       for (let i = 0; i < n; i++) {
//     let left = 0, right = n - 1;
//     while (left < right) {
//       [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
//       left++;
//       right--;
//     }
//   }
//      return matrix
    
// }
// console.log(rotateMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]));

