function mergeSort(arr,low,high){
    if(low>=high) return;
    let mid = Math.floor((low+high)/2);
    mergeSort(arr,low,mid);
    mergeSort(arr,mid+1,high);
    merge(arr,low,mid,high);
}
let arr=[3,1,2,4,1,5,2,6,4]
mergeSort(arr,0,arr.length-1)
console.log(arr);

function merge(arr,low,mid,high) {
    let temp=[];
    let left=low;
    let right=mid+1;
    while(left<=mid && right<=high) {
        if(arr[left]<arr[right]){
            temp.push(arr[left]);
            left++;
        }
        else{
            temp.push(arr[right]);
            right++;
        }
    }
    while (left<=mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right<=high) {
        temp.push(arr[right]);
        right++;
        }
        for(let i=low;i<=high;i++) {
            arr[i]=temp[i-low];
        }

    
}
