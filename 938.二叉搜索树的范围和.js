/*
 * @lc app=leetcode.cn id=938 lang=javascript
 *
 * [938] 二叉搜索树的范围和
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if (!root) return 0
    if ((root.val > high) || (root.val < low)) {
        return 0 + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
    }
    else {
        return root.val + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high)
    }
};
// @lc code=end

