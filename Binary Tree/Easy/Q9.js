//Count Complete Tree Nodes

var countNodes = function (root) {
  if (root === null) return 0;
  let left = findHeightLeft(root);
  let right = findHeightRight(root);
  if (left === right) return (1 << left) - 1;
  else return countNodes(root.left) + countNodes(root.right) + 1;
};
function findHeightLeft(node) {
  let hght = 0;
  while (node) {
    hght++;
    node = node.left;
  }
  return hght;
}

function findHeightRight(node) {
  let hght = 0;
  while (node) {
    hght++;
    node = node.right;
  }
  return hght;
}
