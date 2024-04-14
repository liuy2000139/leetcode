/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    return A.sort((a,b) => Math.abs(a) - Math.abs(b)).map(v => Math.pow(v, 2))
};
// @lc code=end

console.log(sortedSquares([-4,-1,0,3,10]))