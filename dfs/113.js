/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const generateTree = require('./tree.js')

const fn = (prev, prevSum, node, target) => {
  if (!node) return []
  const val = node.val
  const next = [...prev, val]
  const nextSum = prevSum + val
  const nextTarget = target - val


  if (!node.left && !node.right && nextTarget === 0) return [next]

  return [...fn(next, nextSum, node.left, nextTarget), ...fn(next, nextSum, node.right, nextTarget)]
}

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
  return fn([], 0, root, targetSum).filter(v => v.length > 0)
};

console.log(pathSum(generateTree([1,-2,-3,1,3,-2,null,-1]), -1))