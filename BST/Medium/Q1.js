//Insert into a Binary Search Tree

var insertIntoBST = function (root, val) {
  if (root === null) return new TreeNode(val);
  let curr = root;
  while (true) {
    if (curr.val <= val) {
      if (curr.right !== null) curr = curr.right;
      else {
        curr.right = new TreeNode(val);
        break;
      }
    } else {
      if (curr.left !== null) curr = curr.left;
      else {
        curr.left = new TreeNode(val);
        break;
      }
    }
  }
  return root;
};
