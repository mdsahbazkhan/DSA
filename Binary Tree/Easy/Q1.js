//Binary Tree Preorder Traversal

// var preorderTraversal = function (root) {
//   let result = [];
//   function dfs(root) {
//     if (root === null) return;

//     result.push(root.val);
//     dfs(root.left);
//     dfs(root.right);
//   }
//   dfs(root);
//   return result;
// };

function preorderTraversal(root) {
  let result = [];
  if (root === null) return result;
  let stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    let node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
}
