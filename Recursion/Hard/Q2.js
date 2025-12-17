//Rat in a Maze Problem

function printPath(mat) {
  let ans = findPath(mat);
  for (let val of ans) {
    console.log(val);
  }
  return 0;
}

function findPath(mat) {
  let ans = [];
  let n = mat.length;
  //   let vis = Array.from({ length: n }, () => Array(n).fill(false));
  //   helper(mat, 0, 0, "", ans, vis);
  helper(mat, 0, 0, "", ans);
  return ans;
}
function helper(mat, r, c, path, ans) {
  let n = mat.length;
  if (r < 0 || c < 0 || r >= n || c >= n || mat[r][c] == 0 || mat[r][c] == -1)
    return;
  if (r == n - 1 && c == n - 1) {
    ans.push(path);
    return;
  }
  mat[r][c] = -1;
  helper(mat, r + 1, c, path + "D", ans); //Down
  helper(mat, r - 1, c, path + "U", ans); //Up
  helper(mat, r, c - 1, path + "L", ans); //Left
  helper(mat, r, c + 1, path + "R", ans); //Right
  mat[r][c] = 1;
}
console.log(
  printPath([
    [1, 0, 0],
    [1, 1, 0],
    [1, 1, 1],
  ])
);
