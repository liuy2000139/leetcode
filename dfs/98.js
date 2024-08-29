/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST2 = function(root, left = -Infinity, right = Infinity) {
  if (!root) return true

  if (root.val <= left) return false

  if (root.val >= right) return false

  if (!root.left && !root.right) return true

  if (root.left) {
    if (root.left.val >= root.val) return false
  }

  if (root.right) {
    if (root.right.val <= root.val) return false
  }

  return isValidBST(root.left, left, root.val) && isValidBST(root.right, root.val, right)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const fn = (root) => {
  if (!root) return []

  let left = fn(root.left)
  let right = fn(root.right)
  let val = root.val


  return [...left, val, ...right]
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, left = -Infinity, right = Infinity) {
    const arr = fn(root)
    return [...new Set(arr)].join(',') === arr.sort((a,b) => a-b).join(',')
};


