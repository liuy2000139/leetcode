/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) return ''
    var deal = node => {
        if (node.left && node.right) {
            return `${node.val}(${deal(node.left)})(${deal(node.right)})`
        } else if (node.left) {
            return `${node.val}(${deal(node.left)})`
        } else if (node.right) {
            return `${node.val}()(${deal(node.right)})`
        } else {
            return `${node.val}`
        }
    }
    return deal(t)
};
// @lc code=end

