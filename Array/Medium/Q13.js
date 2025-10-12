// 3Sum Problem

// Brute

// function threeSum(arr) {
//     let n= arr.length;
//     let st= new Set();
//     for(let i=0;i<n;i++){
//         for(let j=i+1;j<n;j++){
//             for(let k=j+1;k<n;k++){
//                 if(arr[i]+arr[j]+arr[k]==0){
//                     let temp =[arr[i],arr[j],arr[k]];
//                     temp.sort((a,b)=>a-b);
//                     st.add(temp.toString());
//                 }
//             }
//         }
//     }
//     let ans=[];
//     for(let triplet of st){
//         ans.push(triplet.split(",").map(Number));
//     }
//     return ans

// }
// const arr=[-1,0,1,2,-1,-4];
// console.log(threeSum(arr));

//Better

// function threeSum(arr) {
//     let n= arr.length;
//     let st= new Set();
//     for(let i=0;i<n;i++){
//         let seen = new Set()
//         for(let j=i+1;j<n;j++){
//            let third =-(arr[i]+arr[j]);
//            if(seen.has(third)){
//             let triplet=[arr[i],arr[j],third].sort((a,b)=>a-b);
//             st.add(triplet.toString())
//            }
//            seen.add(arr[j]);

//         }
//     }
//     let ans=[];
//     for(let triplet of st){
//         ans.push(triplet.split(",").map(Number));
//     }
//     return ans

// }
// const arr=[-1,0,1,2,-1,-4];
// console.log(threeSum(arr));

//Optimal

function threeSum(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < n; i++) {
    let j = i + 1;
    let k = n - 1;
    if (arr[i] == arr[i - 1]) continue;
    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum < 0) {
        j++;
      } else if (sum > 0) {
        k--;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++;
        while (j < k && arr[k] == arr[k + 1]) k--;
      }
    }
  }
  return ans;
}
const arr = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(arr));
