/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function(root) {
    let arr = []
    if (!root) return 0
    var getDepth = node => {
        if (!node) return 0
        let l = getDepth(node.left), r = getDepth(node.right)
        arr.push(l + r)
        return 1 + Math.max(l, r)
    }
    arr.push(getDepth(root.left) + getDepth(root.right))
    return arr.sort((a,b) => b-a)[0]
};

// @lc code=end

