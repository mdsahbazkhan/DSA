    //Binary Tree Right Side View

    var rightSideView = function (root) {
    if (root === null) return [];
    let ds = [];
    function dfs(node, level) {
        if (node === null) return;

        if (level === ds.length) {
        ds.push(node.val);
        }
        bfs(node.right, level + 1);
        dfs(node.left, level + 1);
    }
    dfs(root, 0);
    return ds;
    };

    //Binary Tree Left Side View

    var leftSideView = function (root) {
    if (root === null) return [];
    let ds = [];
    function dfs(node, level) {
        if (node === null) return;

        if (level === ds.length) {
        ds.push(node.val);
        }
        dfs(node.left, level + 1);
        dfs(node.right, level + 1);
    }
    dfs(root, 0);
    return ds;
    };
