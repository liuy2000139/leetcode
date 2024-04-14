/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
 * @return {number[]}
 */
let res = {}
let fn = root => {
    if (root) {
        if (res[root.val]) res[root.val]++
        else res[root.val] = 1
        fn(root.left)
        fn(root.right)
    }
}
var findMode = function(root) {
    res = {}
    fn(root)
    let arr = Object.entries(res)
    arr.sort((a,b) => b[1] - a[1])
    return arr.filter(v => v[1] === arr[0][1]).map(v => v[0])

};
// @lc code=end

