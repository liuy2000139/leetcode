/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    if (ops.length === 0) return m*n
    let a = ops.sort((a,b) => a[0]-b[0])[0][0]
    let b = ops.sort((a,b) => a[1]-b[1])[0][1]
    return a*b
};
// @lc code=end

console.log(maxCount(3, 3, [[1,2],[3,3], [2,1], [2,2]]))
