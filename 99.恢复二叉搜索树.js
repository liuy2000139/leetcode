/*
 * @lc app=leetcode.cn id=99 lang=javascript
 *
 * [99] 恢复二叉搜索树
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
    let last = -Infinity
    var isValidBST = function(node) {
    
        if (node === null) {
            return true
        }

        if (isValidBST(node.left)) {
            if (last < node.val) {
                last = node.val
                return isValidBST(node.right)
            }
        }
        return false
    }
    console.log(isValidBST(root))
};
// @lc code=end

