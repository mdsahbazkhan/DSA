//Sort an array of 0's 1's and 2's

//Brute
// function sortColor(arr){
// arr= arr.sort((a,b)=>a-b)
// return arr
// }
// let arr=[0,1,1,0,1,2,1,2,0,0]
// console.log(sortColor(arr));


//Better

// function sortColor(arr) {
//     let n= arr.length;
//    let count0=0;
//    let count1=0;
//    let count2=0; 
//    for(let i=0;i<n;i++){
//     if(arr[i]==0){
//         count0++;
//     }else if(arr[i]==1){
//         count1++;
//     }else{
//         count2++;
//     }
//    }
//    for(let i=0;i<count0;i++){
//     arr[i]=0;
//    }
//    for(let i=count0;i<count0+count1;i++){
//     arr[i]=1;
//    }
//    for(let i=count0+count1;i<n;i++){
//     arr[i]=2;
//    }
// return arr
// }
// let arr=[0,1,1,0,1,2,1,2,0,0]
// console.log(sortColor(arr));

// Optimal

function sortColor(arr) {
    let n=arr.length;
    let low=0;
    let mid=0;
    let high=n-1
    while(mid<=high){
        if(arr[mid]==0){
           
            [arr[mid],arr[low]]=[arr[low],arr[mid]];
            low++;
            mid++;
        }else if(arr[mid]==1){
               mid++; 

        }else{
            

          [arr[mid],arr[high]]=[arr[high],arr[mid]];
            high--;
        }
    }
    return arr
    
}
let arr=[0,1,1,0,1,2,1,2,0,0]
console.log(sortColor(arr));