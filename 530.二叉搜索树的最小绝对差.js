/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function(root) {
    let arr = []
    var fn = node => {
        arr.push(node.val)
        node.right && fn(node.right)
        node.left && fn(node.left)
    }
    fn(root)
    arr.sort((a,b) => a-b)
    let min = Infinity
    for (let i=0;i<arr.length-1;i++) {
        min = Math.min(min, arr[i+1] - arr[i])
    }
    return min
};
// @lc code=end

