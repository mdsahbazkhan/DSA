//Binary Tree Right Side View

var rightSideView = function (root) {
  if (root === null) return [];
  let ds = [];
  function bfs(node, level) {
    if (node === null) return;

    if (level === ds.length) {
      ds.push(node.val);
    }
    bfs(node.right, level + 1);
    bfs(node.left, level + 1);
  }
  bfs(root, 0);
  return ds;
};

//Binary Tree Left Side View

var leftSideView = function (root) {
  if (root === null) return [];
  let ds = [];
  function bfs(node, level) {
    if (node === null) return;

    if (level === ds.length) {
      ds.push(node.val);
    }
    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  }
  bfs(root, 0);
  return ds;
};
