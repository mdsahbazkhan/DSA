// Binary Tree Maximum Path Sum

var maxPathSum = function (root) {
    let maxi = -Infinity;
    function maxPath(node) {
        if (node === null) return 0;
        let left = Math.max(0, maxPath(node.left, maxi))
        let right = Math.max(0, maxPath(node.right, maxi))
        maxi=Math.max(maxi,left+right+node.val)
        return Math.max(left,right)+node.val
    }
    maxPath(root)
    return maxi
};