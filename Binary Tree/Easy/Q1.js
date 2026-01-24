//Binary Tree Preorder Traversal

var preorderTraversal = function (root) {
  let result = [];
  function dfs(root) {
    if (root === null) return;

    result.push(root.val);
    dfs(root.left);
    dfs(root.right);
  }
  dfs(root);
  return result;
};
