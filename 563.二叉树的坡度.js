/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * @return {number}
 */
var findTilt = function(root) {
    if (!root) return 0
    var getSum = node => {
        if (!node) return 0
        const l = getSum(node.left), r = getSum(node.right)
        node.val += l + r
        return node.val
    }
    getSum(root)
    console.log(root)
    let count = 0
    var deal = node => {
        if (!node) return 0
        if (node.left && node.right) {
            count += Math.abs(node.left.val - node.right.val)
            deal(node.left)
            deal(node.right)
        } else {
            if (node.left) {
                count += Math.abs(node.left.val)
                deal(node.left)
            } else if (node.right) {
                count += Math.abs(node.right.val)
                deal(node.right)
            } else count += 0
        }
    }
    deal(root)
    return count
};
// @lc code=end

