// function permutation(arr) {
// let result=[];
// let used= new Array(arr.length).fill(false);
// function backTrack(path){
//     if(path.length==arr.length){
//         result.push([...path])
//         return
//     }
//     for(let i=0;i<arr.length;i++){
//         if(used[i])continue;
//         used[i]=true;
//         path.push(arr[i]);
//         backTrack(path);
//         path.pop();
//         used[i]=false;

//     }

// }
// backTrack([])
// return result
    
// }
// console.log((permutation([1,2,3])));


function permute(arr,index=0,n=arr.length-1){
    if(index==n){
        console.log(arr.join(","));
        return;        
    }
    for(let i=index;i<=n;i++){
        [arr[index],arr[i]]=[arr[i],arr[index]];
        permute(arr,index+1,n);
         [arr[index],arr[i]]=[arr[i],arr[index]];
    }

}
permute([1,2,3])


