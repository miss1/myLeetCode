/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (!root) return 0;
  let num = 0;
  const q = [[root, 1]];
  while (q.length > 0) {
    const [n, level] = q.shift();
    if (!n.left && !n.right) {
      num = level;
      break;
    }
    if (n.left) q.push([n.left, level + 1]);
    if (n.right) q.push([n.right, level + 1]);
  }
  return num;
};
