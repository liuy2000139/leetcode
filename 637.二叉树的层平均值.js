/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    let obj = {}
    let deal = (node, depth = 0) => {
        if (!node) return false
        obj[depth] = obj[depth] || {val: 0, count:0}
        obj[depth].val += node.val
        obj[depth].count += 1
        deal(node.left, depth+1)
        deal(node.right, depth+1)
    }
    deal(root)
    return Object.entries(obj).sort((a,b) => a[0]-b[0]).map(v => v[1].val/v[1].count)
};
// @lc code=end

