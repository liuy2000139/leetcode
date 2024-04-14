/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    var deal = (a, b) => {
        if (!a && !b) return true
        if ((!a && b) || (a && !b)) return false
        return a.val === b.val && deal(a.left, b.left) && deal(a.right, b.right)
    }
    if (!s && !t) return true
    if ((!s && t) || (s && !t)) return false
    return deal(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
};
// @lc code=end

