// Rearrange Array Elements by Sign

//Brute Force
// function reArrange(arr) {
//     let n= arr.length;
//     let positive=[];
//     let negative=[];
//     for(let i=0;i<n;i++){
//         if(arr[i]>0){
//             positive.push(arr[i]);
//         }else{
//             negative.push(arr[i]);
//         }
//     }
//     for(let i=0;i<n/2;i++){
//         arr[2*i]=positive[i];
//         arr[2*i+1]=negative[i]
//     }
//     return arr

    
// }
// console.log(reArrange([3,1,-2,-5,2,-4]));

//Optimal

// function reArrange(arr) {
//     let n= arr.length;
//     let posIndex =0;
//     let negIndex=1;
//     let result=[]
//     for(let i=0;i<n;i++){
//         if(arr[i]<0){
// result[negIndex]=arr[i];
// negIndex+=2;
//         }else{
//             result[posIndex]=arr[i];
// posIndex+=2;
//         }
//     }

// return result
    
// }
// console.log(reArrange([3,1,-2,-5,2,-4]));

// (OR)
function reArrange(arr) {
    let n= arr.length;
    let positive=[];
    let negative=[];
    for(let i=0;i<n;i++){
        if(arr[i]>0){
            positive.push(arr[i])
        }else{
            negative.push(arr[i])
        }
    }
    if(positive.length>negative.length){
        for(let i=0;i<negative.length;i++){
            arr[2*i]=positive[i];
            arr[2*i+1]=negative[i]
        }
        let index=negative.length*2;
        for(let i=negative.length;i<positive.length;i++){
            arr[index]=positive[i]
            index++;
        }
    }else{
         for(let i=0;i<positive.length;i++){
            arr[2*i]=positive[i];
            arr[2*i+1]=negative[i]
        }
        let index=positive.length*2;
        for(let i=positive.length;i<negative.length;i++){
            arr[index]=negative[i]
            index++;
        }
    }
    return arr
    
}
console.log(reArrange([3,-1,-2,-5,-2,4]));





