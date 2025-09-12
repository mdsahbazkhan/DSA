// Majority element n/3

//Brute

// function majorityEle(arr) {
//     let n=arr.length;
//     const threshold=Math.floor(n/3);
//     let res=[];
//     for(let i=0;i<n;i++){
//             let count=0;
//             for(let j=0;j<n;j++){
//                 if(arr[j]==arr[i]){
//                     count++;
//                 }
            
//             }
//             if(count>threshold && !res.includes(arr[i])){
//               res.push(arr[i])
//             }
//     }
//     return res
    
// }
// const arr=[1,1,1,1,3,2,2,2];
// console.log(majorityEle(arr));


//Better

// function majorityEle(arr) {
//     let n=arr.length;
//     const threshold=Math.floor(n/3)+1;
//     let hashMap=new Map();
//     let res=[];
//     for(let i=0;i<n;i++){
//             hashMap.set(arr[i],(hashMap.get(arr[i])||0)+1);
//             if(hashMap.get(arr[i])==threshold){
//                 res.push(arr[i]);
//             }
//             if(res.length==2)break;
//     }
//     return res
    
// }
// const arr=[1,1,1,1,3,2,2,2,3];
// console.log(majorityEle(arr));


//Optimal

function majorityEle(arr) {
    let n=arr.length;
    let threshold=Math.floor(n/3)+1;
    let count1=0;
    let count2=0;
    let ele1;
    let ele2;
    for(let i=0;i<n;i++){
        if(count1==0&& arr[i]!=ele2){
            count1=1;
            ele1=arr[i];
        }
        else if(count2==0&& arr[i]!=ele1){
            count2=1;
            ele2=arr[i];
        }
        else if(ele1==arr[i])count1++;
        else if(ele2==arr[i])count2++;
        else{
            count1--;
            count2--;
        }
    }
    let res=[];
    let freq1=0;let freq2=0;
    for(let i=0;i<n;i++){
        if(ele1==arr[i])freq1++;
        if(ele2==arr[i])freq2++;
    }
    if(freq1>=threshold){
        res.push(ele1);
    }
    if(freq2>=threshold){
        res.push(ele2);
    }
    res.sort((a,b)=>a-b);
    return res
    
}
const arr=[1,1,1,1,3,2,2,2,3];
console.log(majorityEle(arr));


