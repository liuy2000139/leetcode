/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let str = ''
    for (let i=0;i<s.length;i=i+2*k) {
        if (s.length-i < k) {
            str += s.slice(i, i+k).split('').reverse().join('')
        } else {
            str += s.slice(i, i+k).split('').reverse().join('')
            str += s.slice(i+k, i+2*k)
        }
    }
    return str
};
// @lc code=end

console.log(reverseStr('abcdefg', 1))