/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    n = n.toString(2).split('')
    if (n.length <= 1) return true
    if (n[0] === n[1]) return false
    return [...new Set(n.filter((v, i) => i%2 === 0))].length === 1 && 
    [...new Set(n.filter((v, i) => i%2 === 1))].length === 1
};
// @lc code=end

console.log(hasAlternatingBits(7))