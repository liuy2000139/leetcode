/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层序遍历
 */

// @lc code=start
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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    const res = []
    const fn = (node, deep = 0) => {
        if (!node) return false
        res[deep] = res[deep] || []
        if (deep%2===0) {
            res[deep].push(node.val)
        } else {
            res[deep].unshift(node.val)
        }
        fn(node.left, deep+1)
        fn(node.right, deep+1)
    }
    fn(root)
    return res
};
// @lc code=end

