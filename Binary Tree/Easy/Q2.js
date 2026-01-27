// Binary Tree Inorder Traversal

// var inorderTraversal = function (root) {
//     let result = [];
//     function dfs(root) {
//         if (root === null) return;
//         dfs(root.left);
//         result.push(root.val);
//         dfs(root.right);
//     }
//     dfs(root);
//     return result;
// };

function inorderTraversal(root) {
  let result = [];
  let st = [];
  let curr = root;
  while (curr != null || st.length > 0) {
    while (curr != null) {
      st.push(curr);
      curr = curr.left;
    }
    curr = st.pop();
    result.push(curr.val);
    curr = curr.right;
  }
  return result;
}
