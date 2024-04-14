/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */

var sumOfLeftLeaves = function(root) {
    let sum = 0
    var fn = (node, isLeft = false) => {
        if (node) {
            if (!node.left && !node.right && isLeft) {
                sum += node.val
            } else {
                fn(node.left, true)
                fn(node.right)
            }
        }
    }
    fn(root)
    return sum
};
// @lc code=end

