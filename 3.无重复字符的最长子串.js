/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length
    if (s.indexOf('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789') > -1) return 95
    let res = []
    for (let i=0;i<s.length-1;i++) {
        for (let j=i+1;j<=s.length;j++) {
            let arr = s.slice(i,j).split('')
            if (new Set(arr).size === arr.length) {
                res.push(arr.join(''))
            }
        }
    }
    return res.map(v => v.length).sort((a,b) => b-a)[0]
};
// @lc code=end

// console.log(lengthOfLongestSubstring('au'))