// Check if Array Is Sorted and Rotated
function isSortedAndRotated(arr) {
let n=arr.length;
let count = 0;
for(let i=1;i<n;i++){
    if(arr[i]<arr[i-1]){
        count++
    }
}
if(arr[n-1]>arr[0]){
    count++
}
return count<=1;
}
console.log(isSortedAndRotated([1,2,3]));
