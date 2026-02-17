//Serialize and Deserialize Binary Tree (LeetCode 297)

var serialize = function (root) {
  let result = [];

  function dfs(node) {
    if (!node) {
      result.push("null");
      return;
    }

    result.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return result.join(",");
};

var deserialize = function (data) {
  let values = data.split(",");
  let index = 0;

  function build() {
    if (values[index] === "null") {
      index++;
      return null;
    }

    let node = new TreeNode(Number(values[index]));
    index++;

    node.left = build();
    node.right = build();

    return node;
  }

  return build();
};
