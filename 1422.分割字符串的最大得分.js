/*
 * @lc app=leetcode.cn id=1422 lang=javascript
 *
 * [1422] 分割字符串的最大得分
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    s = s.split('')
    let count = 0
    for (let i=1;i<s.length;i++) {
        let left = s.slice(0, i).filter(v => v === '0').length
        let right = s.slice(i).filter(v => v === '1').length
        let sum = left + right
        count = Math.max(count,sum)
    }
    return count
};
// @lc code=end

console.log(maxScore('00'))