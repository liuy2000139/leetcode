/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let arr = []
    let deal = node => {
        if (node) {
            arr.push(node.val)
            deal(node.left)
            deal(node.right)
        }
    }
    deal(root)
    if (arr.length === 0) return false
    let flag = false
    for (let i=0;i<arr.length && !flag;i++) {
        flag = arr.lastIndexOf(k - arr[i]) > -1 && arr.lastIndexOf(k - arr[i]) !== i
    }
    return flag
}
// @lc code=end

