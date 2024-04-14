/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth = function(root) {
  let arr = []
  let deep = 0
  let flag = false
  if (!root) return deep
  arr.push(root)
  while(arr.length && !flag) {
    const len = arr.length
    deep++
    for (let i=0;i<len && !flag;i++) {
      if (arr[i].left || arr[i].right) {
        if (arr[i].left) arr.push(arr[i].left)
        if (arr[i].right) arr.push(arr[i].right)
      } else {
        flag = true
      }
      
    }
    arr.splice(0, len)
  }
  return deep

};

// @lc code=end

