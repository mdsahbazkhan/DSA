//Construct Binary Tree from Preorder and Inorder Traversal

var buildTree = function (preorder, inorder) {
    let preIdx = 0;

    // Step 1: create map for inorder index
    let map = new Map();
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i);
    }

    function helper(left, right) {
        if (left > right) return null;

        // Step 2: get root from preorder
        let rootVal = preorder[preIdx++];
        let root = new TreeNode(rootVal);

        // Step 3: get index in O(1)
        let inIdx = map.get(rootVal);

        // Step 4: build left and right
        root.left = helper(left, inIdx - 1);
        root.right = helper(inIdx + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};