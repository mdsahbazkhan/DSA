// const readline = require("readline")
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// })


// rl.question("Enter the n number: ", function(n) {
//     n = parseInt(n);
  

//     function PrintName(i,n) {
//         if (i>n) return;
//         console.log(`${i} Sahbaz`);
       
//         PrintName(i+1,n);
//     }

//     PrintName(1,n);
//     rl.close();

// })

//Print 1 to N using  Backtrack

// function printNno(i,n){
//     if(i<1) return ;
// printNno(i-1,n);
// console.log(i);

// }
// printNno(5,5)

// Print  N to 1 using  Backtrack
// function printNno(i,n){
//     if(i>n) return ;
//     printNno(i+1,n);
//     console.log(i);
// }
// printNno(1,5)

// function sumNatural(i,sum){
//     if(i<1){
//         console.log(sum);
//         return ;        
//     }
//     sumNatural(i-1,sum+i)
// }
// sumNatural(5,0)


// function sumNatural(i){
//     if(i<1) return 0;
//     return i+sumNatural(i-1);
// }
// console.log(sumNatural(-5));

// function factorial(i){
//     if(i<0){
//         console.log("Factorial is not defined for negative numbers");
//     }
//     if(i===0) return 1;
//   return i*factorial(i-1); 
// }
// console.log(factorial(1));


// Two pointer recursion
// class Solution {
//     reverse(arr, n) {
//         this.reverseArr(arr,0,n-1);
//         console.log(arr.join(' '));

//     }
//     reverseArr(arr,start,end){
//         if(start>=end)return;
//         let temp=arr[start];
//         arr[start]=arr[end]
//         arr[end]=temp;
//         this.reverseArr(arr,start+1,end-1);
//     }
// }
// let obj = new Solution();
// obj.reverse([1, 2, 3, 4, 5], 5);

// One pointer recursion
// class Solution {
//     reverse(arr, n) {
//         this.reverseArr(arr,0,n);
//         console.log(arr.join(' '));

//     }
//     reverseArr(arr,i,n){
//         if(i>=n/2) return ;
//         let temp=arr[i];
//         arr[i]=arr[n-i-1];
//         arr[n-i-1]=temp;
//         this.reverseArr(arr,i+1,n);

//     }
    
// }
// let obj = new Solution();
// obj.reverse([1, 2, 3, 4, 5], 5);


//Check palindrome using recursion one pointer
// class Solution {
//     isPalindrome(i,s) {
//         let n=s.length
//         if(i>=n/2) return true;
//         if(s[i]!==s[n-1-i])return false;
//         return this.isPalindrome(i+1,s);

//     }
// }
// const obj = new Solution();
// console.log(obj.isPalindrome(0,"raddar")); 

// class Solution {
   
//         checkPalindrome(i,s,n){
//             if(i>=n) return true;
//             if(s[i]!==s[n])return false;
//             return this.checkPalindrome(i+1,s,n-1);
//         }
// }
// const obj = new Solution();
// let str = "radar"
// console.log(obj.checkPalindrome(0,str,str.length-1));  




// var isPalindrome = function(s) {

//     let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
//     const n=str.length;
//     console.log(n);
//     console.log(str);
    
//     for(let i=0;i<Math.floor(n/2);i++){
//         if(str[i]!=str[n-1-i]) {
//             return false;
//         }

//     }
//     return true;
    
// };

// console.log(isPalindrome("A man, a plan, a canalz: Panama"))

function fib(n) {
    if(n<=1)return n;
    return fib(n-1)+fib(n-2);
    
}
console.log(fib(40));

