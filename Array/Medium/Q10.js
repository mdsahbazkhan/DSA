// Print the matrix in spiral manner

function spiralMatrix(matrix) {
    let n= matrix.length
    let m= matrix[0].length;
    let left=0;let right=m-1;
    let top=0;let bottom=n-1;
    let result=[];
    while(top<=bottom && left<=right){
        for(let i=left;i<=right;i++){
    result.push(matrix[top][i]);
        }
        top++
        for(let j=top;j<=bottom;j++){
            result.push(matrix[j][right]);
        }
        right--
        if(top<=bottom){
        for(let k=right;k>=left;k--){
            result.push(matrix[bottom][k])
        }
        bottom--}
        
        if(left<=right){
        for(let l=bottom;l>=top;l--){
            result.push(matrix[l][left])
        }
        left++
        }
    }
    return result
};
console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
