/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    n = n.toString(2)
    n = n.padStart(32, '0').split('').reverse().join('')
    return parseInt(n, 2)
};
// @lc code=end

// console.log(reverseBits(43261596))