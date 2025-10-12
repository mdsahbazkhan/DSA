// Maximum consecutive once
// function maxConsecutive(arr,n) {
//     let counter =0;
//     let max=0;
//     for(let i=0;i<n;i++){
//         if(arr[i]===1){
//             counter++;
//             max=Math.max(counter,max)
//         }else{
//             counter=0
//         }
//     }
//     return max
    
// }
// let arr = [1,1,0,1,1,1,0,1,1,1,1,1];
// console.log(maxConsecutive(arr,arr.length));

function maxConsecutiveChar(str,n) {
    let max=1;
    let counter=1;
    let resultChar = str[0]; 
    for(let i=1;i<n;i++){
        if(str[i]===str[i-1]){
            counter++;
            // max=Math.max(counter,max)
  if (counter > max) {
                max = counter;
                resultChar = str[i];
            }
        }else{
            counter=1; 
        }
    }
    // return max
     return {
        length: max,
        substring: resultChar.repeat(max)
    };
    
}

let str = "aaabbbaaacccddddddbb";
console.log(maxConsecutiveChar(str,str.length)); 
