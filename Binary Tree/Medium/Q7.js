//Root to Node Path in Binary Tree

function getPath(root, arr, x) {
  if (root === null) return false;

  arr.push(root.data);

  if (root.data === x) {
    return true;
  }

  if (getPath(root.left, arr, x) || getPath(root.right, arr, x)) {
    return true;
  }

  // backtrack
  arr.pop();
  return false;
}

function pathInATree(root, x) {
  const arr = [];
  if (root === null) return arr;

  getPath(root, arr, x);
  return arr;
}
