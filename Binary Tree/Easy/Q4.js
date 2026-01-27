// Maximum Depth of Binary Tree

var maxDepth = function (root) {
    if (root === null) return 0;
    let lh = maxDepth(root.left);
    let rh = maxDepth(root.right);

    return 1 + Math.max(lh, rh)
};