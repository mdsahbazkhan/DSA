// Children Sum in a Binary Tree

class Solution {
  isSumProperty(root) {
    // Empty tree or leaf node
    if (root === null || (root.left === null && root.right === null)) {
      return 1;
    }

    let left = 0;
    let right = 0;

    if (root.left) left = root.left.data;
    if (root.right) right = root.right.data;

    // Check current node
    if (root.data !== left + right) {
      return 0;
    }

    // Check left and right subtree
    return this.isSumProperty(root.left) && this.isSumProperty(root.right);
  }
}
// Children Sum in a Binary Tree

class Solution {
  isSumProperty(root) {
    if (root === null || (root.left === null && root.right === null)) {
      return;
    }

    let child = 0;
    if (root.left) {
      child += root.left.data;
    }
    if (root.right) {
      child += root.right.data;
    }

    if (child >= root.data) {
      root.data = child;
    } else {
      if (root.left) root.left.data = root.data;
      if (root.right) root.right.data = root.data;
    }

    this.isSumProperty(root.left);
    this.isSumProperty(root.right);

    let total = 0;
    if (root.left) total += root.left.data;
    if (root.right) total += root.right.data;

    if (root.left || root.right) root.data = total;
  }
}
