/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let num = 0;
  const dfs = (r, level) => {
    if (!r) return;
    if (!r.left && !r.right) num = level > num ? level : num;
    dfs(r.left, level + 1);
    dfs(r.right, level + 1);
  };
  dfs(root, 1);
  return num;
};
