//Top View of Binary Tree

class Solution {
  topView(root) {
    if (!root) return [];
    let queue = [[root, 0]];
    let map = new Map();
    while (queue.length > 0) {
      let [node, line] = queue.shift();
      if (!map.has(line)) {
        map.set(line, node.data);
      }
      if (node.left !== null) {
        queue.push([node.left, line - 1]);
      }
      if (node.right !== null) {
        queue.push([node.right, line + 1]);
      }
    }
    let ans = [];
    let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);

    for (let key of sortedKeys) {
      ans.push(map.get(key));
    }

    return ans;
  }
}
