/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let arr = s.match(/(1+|0+)/g).map(v => v.length)
    let count = 0
    for (let i=0;i<arr.length-1;i++) {
        count += Math.min(arr[i], arr[i+1])
    }
    return count
};
// @lc code=end

console.log(countBinarySubstrings("00110011"))