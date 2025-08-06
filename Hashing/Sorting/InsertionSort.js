





// function insertionSort(arr){
//   let n=arr.length
//   for(let i=0;i<n;i++){
//     let j=i;
//     while(j>0&& arr[j-1]>arr[j]){
//       let temp =arr[j];
//       arr[j]=arr[j-1];
//       arr[j-1]=temp;
//       j--;
//     }
//   }
//   return arr;
// }
// console.log(insertionSort([4,2,1,3]))



//Merge Sort
function mergeSort(arr,low,high) {
  if(low>=high) return;
  let mid=Math.floor((low+high)/2);
  mergeSort(arr,low,mid);
  mergeSort(arr,mid+1,high);
  merge(arr,low,mid,high);
  
}

const arr =[3,2,4,1,3]
let n= arr.length;

mergeSort(arr,0,n-1);
console.log(arr);

function merge(arr,low,mid,high) {
  let temp=[];
  let left=low;
  let right =mid+1;
  while(left<=mid &&right<=high) {
    if(arr[left]<=arr[right]){
      temp.push(arr[left]);
      left++;
    }else{
      temp.push(arr[right]);
      right++
    }
  }
  while(left<=mid) {
    temp.push(arr[left]);
    left++;
  }
  while(right<=high) {
    temp.push(arr[right]);
    right++;
    }
    for(let i=low;i<=high;i++){
      arr[i]=temp[i-low]; 

    }
   
}