// Binary Tree Postorder Traversal

var postorderTraversal = function (root) {
  let result = [];
  function dfs(root) {
    if (root === null) return;
    dfs(root.left);
    dfs(root.right);
    result.push(root.val);
  }
  dfs(root);
  return result;
};
