// Sort a stack using recursion

function sortStack(stack) {
  if (stack.length == 0) return;
  let top = stack.pop();
  sortStack(stack);
  insert(stack, top);
}
function insert(stack, temp) {
  if (stack.length == 0 || stack[stack.length - 1] <= temp) {
    stack.push(temp);
    return;
  }
  let top = stack.pop();
  insert(stack, temp);
  stack.push(top);
}
let stack = [5, -2, 9, -7, 3];
sortStack(stack);
console.log(stack);
