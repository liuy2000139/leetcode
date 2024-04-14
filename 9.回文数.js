/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false
    if (x<10) return true
    x = x.toString()
    const len = parseInt(x.length / 2)
    // return x === x.split("").reverse().join("")
    for (let i=0;i<len;i++) {
        if (x[i] !== x[x.length - i - 1]) return false
    }
    return true
};
// @lc code=end

