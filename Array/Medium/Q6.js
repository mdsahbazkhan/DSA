// Next permutation
function nextPermutation(arr) {
    let index=-1;
    let n= arr.length;
    for(let i=n-2;i>=0;i--){
        if(arr[i]<arr[i+1]){
            index=i;
            break;
        }
    }
   
    if(index==-1){
        arr.reverse()
        return arr
    }
     for(let i=n-1;i>=index;i++){
        if(arr[i]>arr[index]){
            [arr[index],arr[i]]=[arr[i],arr[index]];
            break;
        }
    }
  let left=index+1;let right=n-1;
  while(left<=right){
    [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
  }
    return arr
}
console.log(nextPermutation([2,1,5,4,2]));



