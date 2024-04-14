/*
 * @lc app=leetcode.cn id=1624 lang=javascript
 *
 * [1624] 两个相同字符之间的最长子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let res = -1
    for (let t of s) {
        let index = s.indexOf(t)
        let lastIndex = s.lastIndexOf(t)
        if (lastIndex > 0 && index !== lastIndex) {
            res = Math.max(res, lastIndex - index - 1)
        }
    }
    return res
};
// @lc code=end

