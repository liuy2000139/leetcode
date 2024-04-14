/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function(root) {
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

