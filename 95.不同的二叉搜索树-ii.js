/*
 * @lc app=leetcode.cn id=95 lang=javascript
 *
 * [95] 不同的二叉搜索树 II
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    let arr = []
    for (let i = 1;i <= n;i++) {
        arr.push(i)
    }

    let res = []

    const fn = (list) => {
       let temp = []
       if (list.length === 0) return []
       for (let i=0;i<list.length;i++) {
           let val = list[i]
           let left = fn(list.slice(0, i))
           let right = fn(list.slice(i+1))
            console.log(left, right)
           if (!left.length && !right.length) {
               temp.push({
                   val,
                   left: null,
                   right: null
               })
           } else if (left.length && !right.length) {
                left.forEach(t => {
                    temp.push({
                        val,
                        left: t,
                        right: null
                    })
                })
           } else if (!left.length && right.length) {
            right.forEach(t => {
                temp.push({
                    val,
                    left: null,
                    right: t
                })
            })
           } else {
            left.forEach(l => {
                right.forEach(r => {
                    temp.push({
                        val,
                        left: l,
                        right: r
                    })
                })
            })
           }
       }
       return temp
    }
    return fn(arr)
    

};
// @lc code=end

// console.log(generateTrees(3))
