/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = 0
    let lens = []
    let sum = {}
    for (let str of s) {
        if (sum[str] >= 1) sum[str] += 1
        else sum[str] = 1
    }
    lens = Object.values(sum)
    count = lens.map(v => Math.floor(v/2)*2).reduce((a,b)=> a+b,0)
    if (lens.some(v => v%2 === 1)) count++
    return count
};
// @lc code=end

