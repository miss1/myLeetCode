/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
  let res = false;
  const dfs = (r, rootTotal) => {
    if (!r || res) return;
    if (!r.left && !r.right && rootTotal + r.val === targetSum) res = true;
    dfs(r.left, rootTotal + r.val);
    dfs(r.right, rootTotal + r.val);
  };
  dfs(root, 0);
  return res;
};
