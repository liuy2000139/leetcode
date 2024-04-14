/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let n = dividend/divisor
    // if (n.toString().indexOf('.') > -1) n = Math.floor(n >= 0 ? n : n+1)
    if (n>Math.pow(2, 31)-1) return Math.pow(2, 31)-1
    else if (n < 0-Math.pow(2, 31)) return 0-Math.pow(2, 31)
    return Math.trunc(n)
};
// @lc code=end

