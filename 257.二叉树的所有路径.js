/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let res = []
    let fn = (node, arr = []) => {
        arr = [...arr]
        if (node) {
            arr.push(node.val)
            if (node.left || node.right) {
                [node.left, node.right].forEach(v => {
                    if (v) {
                        fn(v, arr)
                    }
                })
            } else {
                res.push(arr.join('->'))
            }
        }
        
    }
   fn(root, [])
   return res
};

// @lc code=end

