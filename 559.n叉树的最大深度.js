/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0
    var getDepth = node => {
        if (!node) return 0
        let arr = (node.children || []).map(v => getDepth(v)).sort((a,b) => b-a)
        console.log(arr)
        return 1 + (arr[0] || 0)
    }
    return getDepth(root)
};
// @lc code=end

