/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
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
 * @return {number[]}
 */
var postorder = function(root) {
    let arr = []
    if (!root) return []
    var fn = node => {
        if (node) {
            (node.children || []).forEach(v => fn(v))
            arr.push(node.val)
        }

    }
    fn(root)
    return arr
};
// @lc code=end

