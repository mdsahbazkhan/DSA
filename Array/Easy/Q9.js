// Union of two sorted array

//brute force

// function unionArr(arr1,arr2) {
// const n1= arr1.length;
// const n2 = arr2.length;
// let st = new Set();
// let index=0;
// let Union =[]
// for(let i=0;i<n1;i++){
//     st.add(arr1[i]);
// }
// for(let i=0;i<n2;i++){
//     st.add(arr2[i]);
// }

// for (let value of st) {
//     Union[index]=value;
//     index++  
// }
// return Union;
    
// }
// const arr1 =[1,1,2,3,4,5];
// const arr2=[2,3,4,4,5,6]
// console.log(unionArr(arr1,arr2));


//Optimal
function unionArr(arr1,arr2) {
    const n1=arr1.length;
    const n2=arr2.length;
    let i=0;
    let j=0;
    let unionArray=[];
    while(i<n1 && j<n2){
        if(arr1[i]<=arr2[j]){
            if(unionArray.length==0 ||unionArray[unionArray.length-1]!=arr1[i] ){
                unionArray.push(arr1[i])
            }
            i++;
        }else{
            if(unionArray.length==0 ||unionArray[unionArray.length-1]!=arr2[j] ){
                unionArray.push(arr2[j])
            }
            j++;
        }
    }
    while(i<n1){
       if(unionArray.length==0 || unionArray[unionArray.length-1]!=arr1[i] ){
                unionArray.push(arr1[i])
            }
            i++;
    }
    while(j<n2){
        if(unionArray.length==0 || unionArray[unionArray.length-1]!=arr2[j]){
                unionArray.push(arr2[j])
            }
            j++;
    }
    return unionArray
    
}
const arr1 =[1,1,2,3,4,5,6,7,8];
const arr2=[2,3,4,4,5,6]
console.log(unionArr(arr1,arr2));



