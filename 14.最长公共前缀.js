/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = ""
    const minLen = Math.min(...strs.map(t => t.length))
    for (let i=0;i<minLen;i++) {
        const current = strs.map(t => t[i])
        if (new Set(current).size === 1) {
            res += current[0]
        } else {
            return res
        }
    }

    return res
};
// @lc code=end

