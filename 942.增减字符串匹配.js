/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S, min = 0, max = 0) {
    let n = S.length
    if (max === 0) max = n
    let s = []
    if (n === 0) return [max]
    if (S[0] === 'I') {
        s = [min]
        min += 1
    } else {
        s = [max]
        max -= 1
    }
    return s.concat(diStringMatch(S.slice(1), min, max))
};
// @lc code=end

// console.log(diStringMatch('III'))