//Balanced Binary Tree

function maxHeight(root) {
  if (root === null) return 0;
  let lh = maxHeight(root.left);
  let rh = maxHeight(root.right);

  return 1 + Math.max(lh, rh);
}

function check(root) {
  if (root === null) return true;

  let lh = maxHeight(root.left);
  let rh = maxHeight(root.right);

  if (Math.abs(lh - rh) > 1) return false;
  let left = check(root.left);
  let right = check(root.right);
  if (!left || !right) return false;

  return true;
}
var isBalanced = function (root) {
  return check(root);
};

// Optimal

var isBalanced = function (root) {
  return dfs(root) != -1;
};
function dfs(root) {
  if (root === null) return 0;
  let lh = dfs(root.left);
  if (lh === -1) return -1;
  let rh = dfs(root.right);
  if (rh === -1) return -1;
  if (Math.abs(lh - rh) > 1) return -1;
  return Math.max(rh, lh) + 1;
}
