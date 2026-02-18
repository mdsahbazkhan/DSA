//Flatten Binary Tree to Linked List

// Brute
var flatten = function (root) {
  let prev = null;
  function flaterInLL(node) {
    if (!node) return;
    flaterInLL(node.right);
    flaterInLL(node.left);
    node.right = prev;
    node.left = null;
    prev = node;
  }
  return flaterInLL(root);
};

//Optimal

var flatten = function(root) {
    let curr=root;
    while(curr!==null){
        if(curr.left!==null){
            let prev=curr.left
            while(prev.right){
                prev=prev.right;
            }
            prev.right=curr.right;
            curr.right=curr.left;
            curr.left=null
        }
        curr=curr.right
    }
    return root
};