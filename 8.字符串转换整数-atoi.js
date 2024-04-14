/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let ans = 0
    s = s.trim()
    if (s.length === 0) return ans
    if (s[0] !== '-' && s[0] !== '+' && isNaN(parseInt(s[0]))) return ans

    let str = s.match(/\d+/g) || []
    if (str.length === 0) return ans
    if (isNaN(parseInt(s[0])) && isNaN(parseInt(s[1]))) return ans
    if (s[0] === '-' && (+str[0]) > Math.pow(2, 31)) {
        return Math.pow(-2, 31)
    }
    if (s[0] === '+' && (+str[0] > (Math.pow(2, 31)-1))) {
        return Math.pow(2, 31)-1
    }
    if (/\d/.test(s[0]) && (+str[0] > (Math.pow(2, 31)-1))) {
        return Math.pow(2, 31)-1
    }
    return ['-','+'].includes(s[0]) ? s[0] + str[0] : str[0]

};
// @lc code=end

// console.log(myAtoi('-91283472332'))