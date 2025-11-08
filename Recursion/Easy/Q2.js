//Reverse stack

// function reverseStack(stack) {
if (stack.length == 0) return;
let top = stack.pop();
reverseStack(stack);
insert(stack, top);
// }
// function insert(stack, temp) {
//   if (stack.length == 0) {
//     stack.push(temp);
//     return;
//   }
//   let top = stack.pop();
//   insert(stack, temp);
//   stack.push(top);
// }
// let stack = [5, -2, 9, -7, 3];
// reverseStack(stack);
// console.log(stack);

function reverseStack(stack) {
  let temp = [];
  while (stack.length > 0) {
    temp.push(stack.pop());
  }
  return temp;
}

let stack = [6, 7, 1, 2, 3];
stack = reverseStack(stack);
console.log(stack);
