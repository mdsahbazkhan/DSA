function quickSort(arr,low,high) {
    if(low<high){
        let partion =quickPivot(arr,low,high);
        quickSort(arr,low,partion-1);
        quickSort(arr,partion+1,high)
    }
}
let arr =[4,6,2,5,7,9,1,3]
quickSort(arr,0,arr.length-1)
console.log(arr);


function quickPivot(arr,low,high){
let i=low;
let j=high;
let pivot = arr[low];
while(i<j){
    while(arr[i]<=pivot&&i<high){
        i++;
    }
    while (arr[j]>pivot) {
        j--;
        
    }
    if(i<j){
        let temp = arr[i];
        arr[i]=arr[j];
        arr[j]=temp;    
    }
}
let temp = arr[low];
arr[low]=arr[j];
arr[j]=temp;
return j;
}