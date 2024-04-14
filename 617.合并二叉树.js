/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (!t1 && !t2) return null
    if (!t1 && t2) return t2
    if (t1 && !t2) return t1
    var merge = (s,t) => {
        s.val += t.val
        if (s.left && t.left) {
            merge(s.left, t.left)
        } else if (!s.left && t.left) {
            s.left = t.left
        }
        if (s.right && t.right) {
            merge(s.right, t.right)
        } if (!s.right && t.right) {
            s.right = t.right
        }
    }
    merge(t1, t2)
    return t1
};
// @lc code=end

