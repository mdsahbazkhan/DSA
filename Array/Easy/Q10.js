//Intersection of two sorted array
//Brute force
// function intersectionArray(arr1, arr2) {
//     const n1 = arr1.length;
//     const n2 = arr2.length;
//     let visited = new Array(n2).fill(0);
//     let intersection = []
//     for (let i = 0; i < n1; i++) {
//         for (let j = 0; j < n2; j++) {
//             if (arr1[i] == arr2[j] && visited[j] == 0) {
//                 intersection.push(arr1[i]);
//                 visited[j] = 1;
//                 break;
//             }
//             if(arr2[j]>arr1[i]) break;
//         }
//     }
//     return intersection

// }
// const arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
// const arr2 = [2, 3, 3, 5, 6, 6, 7];
// console.log(intersectionArray(arr1, arr2));

//Optimal
function intersectionArray(arr1,arr2) {
    const n1=arr1.length;
    const n2 =arr2.length;
    let i=0;
    let j=0;
    let intersection=[];
    while(i<n1 && j<n2){
        if(arr1[i]<arr2[j]){
            i++;
        }else if(arr1[i]>arr2[j]){
            j++;
        }else{
            intersection.push(arr1[i]);
            i++;j++;
        }
    }
    return intersection

}
const arr1 = [1, 2, 2, 3, 3, 4, 5, 6];
const arr2 = [2, 3, 3, 5, 6, 6, 7];
console.log(intersectionArray(arr1, arr2));
