// Binary Tree Inorder Traversal

// var inorderTraversal = function (root) {
//     let result = [];
//     function dfs(root) {
//         if (root === null) return;
//         dfs(root.left);
//         result.push(root.val);
//         dfs(root.right);
//     }
//     dfs(root);
//     return result;
// };

//Morris inorderTraversal
var inorderTraversal=function (root) {
let result= [];
let curr=root;

while (curr!==null) {
if (curr.left===null) {
result.push(curr.val);
curr=curr.right;
    }else {
let pred=curr.left;

while (pred.right!==null&&pred.right!==curr) {
pred=pred.right;
      }

if (pred.right===null) {
pred.right=curr;// create thread
curr=curr.left;
      }else {
pred.right=null;// remove thread
result.push(curr.val);
curr=curr.right;
      }
    }
  }

return result;
};