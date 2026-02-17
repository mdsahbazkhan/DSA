//Construct Binary Tree from Inorder and Postorder Traversal

var buildTree=function(inorder,postorder) {
let postIndex=postorder.length-1;

// Map for inorder index
let map=newMap();
for (let i=0;i<inorder.length;i++) {
map.set(inorder[i],i);
    }

function helper(left,right) {
if (left>right)returnnull;

// Step 1: root from postorder
let rootVal=postorder[postIndex--];
let root=newTreeNode(rootVal);

// Step 2: find index in inorder
let index=map.get(rootVal);

// Step 3: build right first, then left
root.right=helper(index+1,right);
root.left=helper(left,index-1);

return root;
    }

return helper(0,inorder.length-1);
};