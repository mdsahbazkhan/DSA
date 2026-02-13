//Maximum Width of Binary Tree

var widthOfBinaryTree = function (root) {
  if (!root) return 0;
  let queue = [[root, 0]];
  let maxWidth = 0;
  while (queue.length > 0) {
    let size = queue.length;
    let start = queue[0][1];
    let end = queue[queue.length - 1][1];
    maxWidth = Math.max(maxWidth, end - start + 1);
    for (let i = 0; i < size; i++) {
      let [node, idx] = queue.shift();
      idx = idx - start;
      if (node.left) {
        queue.push([node.left, 2 * idx + 1]);
      }
      if (node.right) {
        queue.push([node.right, 2 * idx + 2]);
      }
    }
  }
  return maxWidth;
};
