//Binary Tree Preorder Traversal

// var preorderTraversal = function (root) {
//   let result = [];
//   function dfs(root) {
//     if (root === null) return;

//     result.push(root.val);
//     dfs(root.left);
//     dfs(root.right);
//   }
//   dfs(root);
//   return result;
// };

//Morris preorderTraversal
var preorderTraversal=function (root) {
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
result.push(curr.val);// Visit before going left
pred.right=curr;
curr=curr.left;
      }else {
pred.right=null;
curr=curr.right;
      }
    }
  }

return result;
};
