/*
 * @lc app=leetcode.cn id=397 lang=javascript
 *
 * [397] 整数替换
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function(num) {
    if (num === 1) {
        return 0
    }
    if (num%2 === 0) {
        return integerReplacement(num/2) + 1
    } else {
        return Math.min(integerReplacement(num-1), integerReplacement(num+1)) + 1
    }
};
// @lc code=end
// console.log(integerReplacement(7))
