/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const generateTree = require("./tree");

const fn = (root) => {
  console.log(root?.val)
  if (!root) return
  let originRoot = root
  const right = root.right
  if (root.left) {
    root.right = fn(root.left)
  } else if (root.right) {
    root.right = fn(root.right)
  } else {
    root.right = null
  }
  root.left = null

  while(root.right) {
    root = root.right
  }
  root.right = fn(right)
  return originRoot
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  fn(root)
};

console.log(flatten(generateTree([1, 2, 5, 3, 4, null, 6])))