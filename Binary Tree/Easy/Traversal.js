//Traversal BT (DFS)

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

//InOrder
// function inorder(root) {
//   if (root === null) return;

//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// }
// inorder(root);

// post Order

// function postOrder(root) {
//   if (root === null) return;

//   postOrder(root.left);
//   postOrder(root.right);
//   console.log(root.val);
// }
// postOrder(root);

//Pre Order
// function preOrder(root) {
//   if (root === null) return;

//   console.log(root.val);
//   preOrder(root.left);
//   preOrder(root.right);
// }
// preOrder(root);

//Traversal BT (BFS)

function levelOrder(root) {
  if (!root) return;

  let queue = [root];

  while (queue.length > 0) {
    let node = queue.shift();
    console.log(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
}
levelOrder(root);
