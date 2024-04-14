/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function(num) {
    if (num === 0) return '0'
    let res = []
    let flag = num > 0
    num = Math.abs(num)
    while(num>0) {
        res.unshift(num%7)
        num = Math.floor(num/7)
    }
    return (flag ? '' : '-') + res.join('')
};
// @lc code=end

