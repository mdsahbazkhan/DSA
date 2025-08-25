//Majority Element

function majorityElem(arr) {
    let n=arr.length;
    for(let i=0;i<n;i++){
        let count=0;
        for(let j=0;j<n;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count>Math.floor(n/2)) return arr[i]
    }
    
}
const arr=[2,2,3,3,1,2,3,1,3,3,3];
console.log(majorityElem(arr));

//Better

// function majorityElem(arr) {
//    let n= arr.length;
//    let hash= new Map();
//    for(let i=0;i<n;i++){
//    hash.set(arr[i],(hash.get(arr[i])||0)+1)
//    }
//   for(let [key,value]of hash){
//     if(value>n/2)return key;
//   }
//   return -1
// }
// const arr=[2,2,3,3,1,2,3,1,3,3];
// console.log(majorityElem(arr));

//Optimal

// function majorityElem(arr) {
//     let n= arr.length
//   let count=0;
//   let ele;
//   for(let i=0;i<n;i++){
//     if(count==0){
//         count=1;
//         ele= arr[i]
//     }else if(arr[i]==ele){
//         count++;
//     }else{
//         count--
//     }
//   }
//   return ele
// }
// const arr=[2,2,3,3,1,2,2];
// console.log(majorityElem(arr));
