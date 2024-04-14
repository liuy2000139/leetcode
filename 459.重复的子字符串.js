/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let res = []
    for (let i=1;i<s.length;i++) {
        res.push(s.slice(0,i))
    }
    return res.some(v => v.repeat(s.length/v.length) === s)
};
// @lc code=end

// console.log(repeatedSubstringPattern('abaab'))
