//Diameter of Binary Tree

//Brute
function maxHeight(root) {
  if (root === null) return 0;

  let lh = maxHeight(root.left);
  let rh = maxHeight(root.right);

  return 1 + Math.max(lh, rh);
}
var diameterOfBinaryTree = function (root) {
  let max = 0;

  function solve(node) {
    if (node === null) return;

    let lh = maxHeight(node.left);
    let rh = maxHeight(node.right);

    max = Math.max(max, lh + rh);

    solve(node.left);
    solve(node.right);
  }

  solve(root);
  return max;
};

//Optimal
var diameterOfBinaryTree = function (root) {
  let diameter = 0;
  function height(node) {
    if (node === null) return 0;
    let lh = height(node.left, diameter);
    let rh = height(node.right, diameter);
    diameter = Math.max(diameter, lh + rh);
    return 1 + Math.max(lh, rh);
  }
  height(root);
  return diameter;
};
