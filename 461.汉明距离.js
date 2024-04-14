/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    x = x.toString(2).padStart(32, '0')
    y = y.toString(2).padStart(32, '0')
    let res = 0
    for (let i=0;i<x.length;i++) {
        if (x[i]!==y[i]) res++
    }
    return res
};
// @lc code=end
