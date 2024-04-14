/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
var sumRootToLeaf = function(root) {
    if (!root) return 0
    let res = []
    const fn = (head, str = '') => {
        if (!head) {
            return false
        }
        str += head.val
        if (head.left || head.right) {
            fn(head.left, str)
            fn(head.right, str)
        } else {
            res.push(str)
        }
    }
    fn(root)
    return res.map(v => parseInt(v, 2)).reduce((a,b) => a+b,0)
};
// @lc code=end

