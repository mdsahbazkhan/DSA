//All Nodes Distance K in Binary Tree
var distanceK = function (root, target, k) {
  let parentMap = new Map();
  //Parent Mark
  function markParent(node, parent) {
    if (!root) return;
    parentMap.set(node, parent);
    if (node.left) markParent(node.left, node);
    if (node.right) markParent(node.right, node);
  }
  markParent(root, null);

  // BFS
  let queue = [target];
  let visited = new Set();
  visited.add(target);
  let distance = 0;
  while (queue.length > 0) {
    if (distance === k) {
      return queue.map((node) => node.val);
    }
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let node = queue.shift();
      if (node.left && !visited.has(node.left)) {
        visited.add(node.left);
        queue.push(node.left);
      }
      if (node.right && !visited.has(node.right)) {
        visited.add(node.right);
        queue.push(node.right);
      }
      let parent = parentMap.get(node);
      if (parent && !visited.has(parent)) {
        visited.add(parent);
        queue.push(parent);
      }
    }
    distance++;
  }
  return [];
};
