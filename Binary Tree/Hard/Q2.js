//Vertical Order Traversal of a Binary Tree
var verticalTraversal = function(root) {
     let nodes = [];

    function dfs(node, row, col) {
        if (!node) return;

        nodes.push([col, row, node.val]);

        dfs(node.left, row + 1, col - 1);
        dfs(node.right, row + 1, col + 1);
    }

    dfs(root, 0, 0);
     // Sort by column, row, value
    nodes.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];   // column
        if (a[1] !== b[1]) return a[1] - b[1];   // row
        return a[2] - b[2];                      // value
    });

    let map = new Map();

    for (let [col, row, val] of nodes) {
        if (!map.has(col)) map.set(col, []);
        map.get(col).push(val);
    }

    return [...map.values()];
    
};